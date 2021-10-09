import mount from "@test/mount";

import { Logo } from "@components";
import { Header } from "./index";
jest.mock("react-i18next", () => ({
    useTranslation: () => ({ t: (key) => key }),
}));
describe("Header component testing with testing-library", () => {
    const component = mount(<Header />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });

    it("renders successfuly next.js logo", () => {
        expect(component.find(Logo)).toBeDefined();
    });
});
