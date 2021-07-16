import React from "react";
import { render, waitFor } from "@testing-library/react";
import Test from "./config/test.utils.js";
import { utils, crud } from "@anymod/core";

/**
 * Have to use /build file here, because using /src/index.js with both
 * named exports and default export causes a problem in bundles.
 */
import Userfront, {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  LogoutButton,
} from "../build/userfront-react.modern.js";

const scope = {};

const SignupCustom = Userfront.build({
  toolId: Test.factories.mods.basic.key,
});

describe("Render a signup form", () => {
  beforeAll(() => {
    // Mock the loading of page assets
    scope.loadMock = jest.fn();
    scope.loadFn = utils.loadPageAssets;
    utils.loadPageAssets = (a, b) => {
      scope.loadMock(a, b);
      return scope.loadFn(a, b);
    };
    // Mock the post request to get the page
    scope.postFn = jest.fn();
    crud.post = async (a) => {
      scope.postFn(a);
      return Test.factories.pages.basic;
    };
  });

  const components = [
    <SignupCustom />,
    <SignupForm toolId={Test.factories.mods.basic.key} />,
    <LoginForm toolId={Test.factories.mods.basic.key} />,
    <PasswordResetForm toolId={Test.factories.mods.basic.key} />,
    <LogoutButton toolId={Test.factories.mods.basic.key} />,
  ];

  components.map((component) => {
    it(`should make a proper request to the endpoint`, async () => {
      render(component);
      await waitFor(() => {
        expect(scope.postFn).toHaveBeenCalled();
      });
      expect(scope.postFn).toHaveBeenCalledWith([
        Test.factories.mods.basic.eid,
      ]);
    });
  });

  it("should render a component and its assets if no page exists yet", async () => {
    render(components[0]);
    Test.fns.fireAllOnloads(document);
    await waitFor(() => {
      expect(scope.loadMock).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(document.body.innerHTML).toContain(
        Test.factories.mods.basic.html.replace(/(<div>)|(<\/div>)/g, "")
      );
      expect(document.head.innerHTML).toContain(Test.factories.mods.basic.css);
    });
  });
});
