import React from "react";
import { render } from "@testing-library/react";

import OrgList from '../components/OrgList'

describe("test orginization list", () => {
    test("Orginization - no data", () => {
        const { getByText } = render(<OrgList data={[]} />);
        expect(getByText("There is no data")).not.toBeNull();
    });

    test("Orginization - with data", () => {
        const data = [{ id: 267818449, name: "Org 1" }, { id: 267752798, name: "Org 2" }];
        const { getByText } = render(<OrgList data={data} />);

        expect(getByText("Org 1")).not.toBeNull();
        expect(getByText("Org 2")).not.toBeNull();
    });
});