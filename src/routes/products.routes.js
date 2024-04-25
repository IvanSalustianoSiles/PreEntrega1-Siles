import { exampleManager} from "../app.js";
import { Router } from "express";
let toSendObject = {};
const router = Router();
router.get("/", (req, res) => {
  if (req.query.limit) {
    try {
      toSendObject = {
        status: 1,
        payload: exampleManager.readFileAndSave().slice(0, +req.query.limit),
      }; // Aprovecho mi método preexistente "readFileAndSave" que lee el archivo y guarda su contenido en el array, retornándolo.

      res.send(toSendObject);
    } catch (error) {
      console.error(
        "Lo sentimos, ha ocurrido un error enviando la información que intentó capturar."
      );
    }
  } else {
    try {
      toSendObject = { status: 1, payload: exampleManager.readFileAndSave() };

      res.send(toSendObject);
    } catch (error) {
      console.error(
        "Lo sentimos, ha ocurrido un error enviando la información que intentó capturar."
      );
    }
  }
});

router.get("/:pid", (req, res) => {
  try {
    toSendObject = {
      status: 1,
      payload: exampleManager.readFileAndSave()[+req.params.pid - 1],
    }; // -1, puesto que lee desde la posición cero la id, que comienza en uno.

    res.send(toSendObject);
  } catch (error) {
    console.error(
      "Lo sentimos, ha ocurrido un error enviando la información que intentó capturar."
    );
  }
});
router.post("/", (req, res) => {
  let newProduct = {...req.body, status: true};
  exampleManager.addProduct(newProduct);
  res.status(200).send(exampleManager.readFileAndSave());
});

export default router;
