import React from "react";
import { render } from "react-dom";
import { Index } from "views/Index";

render(
    <React.Fragment>
        <Index />
    </React.Fragment>,
    document.getElementById("content"),
);