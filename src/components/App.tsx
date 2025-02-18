import { Box, Button, Image, Spinner } from "@chakra-ui/react";
import { CreateProductForm } from "./CreateProductForm";
import { useAllDocs, usePouch } from "use-pouchdb";
import PouchDb from "pouchdb-browser";

export const App = () => {
    let db = usePouch();


    const { rows, loading } = useAllDocs({
        include_docs: true,
        attachments: true,
    });

    console.log({rows});


    const getImages = () => {
        return rows.map((row) => {
            
            try {
                const base64String = row.doc._attachments.file.data;
                const contentType = row.doc._attachments.file.content_type;
                return (
                    <Box>
                        <Image id={row.id} key={row.key} src={`data:${contentType};base64,${base64String}`}/>
                    </Box>
                );
            } catch (e) {
                console.log({eRROR: e});
            }
        });
    };

    const deleteDb = () => {
        db.destroy();
        db = new PouchDb('local');
    };


    return (
        <Box key="box">
            <Button onClick={() => deleteDb()}>Delete db</Button>
            {<CreateProductForm />}
            {loading && <Spinner />}
            {!loading && rows.length > 0 && getImages()}
        </Box>

    );

};