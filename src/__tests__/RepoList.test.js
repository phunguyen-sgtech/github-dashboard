import React from "react";
import { render } from "@testing-library/react";

import RepoList from '../components/RepoList'

describe("test repositories list", () => {
    test("repositore - no data", () => {
        const { getByText } = render(<RepoList data={[]} />);
        expect(getByText("There is no data")).not.toBeNull();
    });

    test(" repositore - with data", () => {
        const data = [{ id: 7717624, name: "Repo 1" }, { id: 9285252, name: "Repo 2" }];
        const { getByText } = render(<RepoList data={data} />);

        expect(getByText("Repo 1")).not.toBeNull();
        expect(getByText("Repo 2")).not.toBeNull();
    });
});