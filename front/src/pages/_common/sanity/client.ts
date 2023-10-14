import { createClient } from "@sanity/client";

export default createClient({
  projectId: "na096qwv",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-08",
});


