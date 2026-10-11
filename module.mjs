// @ts-check
import { module } from "@prisma/composer";
import moontvService from "./service.mjs";

export default module("moontv", ({ provision }) => {
  provision(moontvService);
});
