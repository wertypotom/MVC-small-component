import {RaadioBlockController } from "./src/controllers/radioBlockController.js";
import { RadioBlockModel } from "./src/models/radioBlockModel.js";
import { RadioBtnsView } from "./src/views/radioBtnsView.js";
import { InputView } from "./src/views/inputView.js";
import { DivView } from "./src/views/divView.js";
import { DivBlockModel } from "./src/models/divBlockModel.js";
import { DivBlockController } from "./src/controllers/divBlockController.js";

const radioBlockModel = new RadioBlockModel() 
const radioBlockController = new RaadioBlockController(radioBlockModel)

const divBlockModel = new DivBlockModel()
const divBlockController = new DivBlockController(divBlockModel)


new RadioBtnsView(radioBlockController)
new InputView(radioBlockController)

new DivView(divBlockController)
