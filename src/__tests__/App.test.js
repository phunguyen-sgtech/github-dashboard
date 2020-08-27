import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import App from "../App";
import RepoList from '../components/RepoList'
import OrgList from '../components/OrgList'


const store = createStore(rootReducer, applyMiddleware(thunk));

const setup = async () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const searchButton = await screen.findByTestId("search-btn");
  const input = await screen.findByTestId("search-input");

  return {
    app,
    searchButton,
    input,
  };
};

describe("test search section", () => {
  test("render app and search button exists", async () => {
    const { searchButton } = await setup();
    expect(searchButton).toHaveTextContent("Search");
  });

  test("render input works correctly", async () => {
    const { input } = await setup();
    fireEvent.change(input, { target: { value: "aaa" } });
    expect(input.value).toBe("aaa");
  });

})

describe("test orginization list", () => {
  test("Orginization - no data", () => {
    const { getByText } = render(<OrgList data={[]} />);
    expect(getByText("There is no data")).not.toBeNull();
  });

  test("Orginization - with data", () => {
    const data = [{ name: "Org 1" }, { name: "Org 2" }];
    const { getByText } = render(<OrgList data={data} />);

    expect(getByText("Org 1")).not.toBeNull();
    expect(getByText("Org 2")).not.toBeNull();
  });
});

describe("test repositories list", () => {
  test("repositore - no data", () => {
    const { getByText } = render(<RepoList data={[]} />);
    expect(getByText("There is no data")).not.toBeNull();
  });

  test(" repositore - with data", () => {
    const data = [{ name: "Repo 1" }, { name: "Repo 2" }];
    const { getByText } = render(<RepoList data={data} />);

    expect(getByText("Repo 1")).not.toBeNull();
    expect(getByText("Repo 2")).not.toBeNull();
  });
});