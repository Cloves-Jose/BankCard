import React from "react";
import ClientHome from "../components/ClientHome";
import ClientBottomSheet from "../components/ClientBottomSheet";


export default () => {
    return (
        <>
            <ClientHome name="Linda" plan="PLUS" value="513.89$" subtitle="Your balance">
                <ClientBottomSheet title="Transactions">
                    
                </ClientBottomSheet>
            </ClientHome>
        </>
    )
}