import {locales} from "./constants";
import { EN_CONTENT_HOME } from "./en";
import { ES_CONTENT_HOME } from "./es";
import { PT_CONTENT_HOME } from "./pt";

const { EN, ES, PT } = locales;

export const CONTENT_BY_LOCALE = {
  [EN]: EN_CONTENT_HOME,
  [ES]: ES_CONTENT_HOME,
  [PT]: PT_CONTENT_HOME,
}
