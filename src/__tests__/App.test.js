import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import App from "../App";


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
