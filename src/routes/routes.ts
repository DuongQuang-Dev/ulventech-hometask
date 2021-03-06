import { Router } from "express"
import validateRequest from "../middleware/validateRequest"
import validateJwt from "../middleware/validateJwt"
import { authRegisterSchema, authLoginSchema } from "../schema/auth.schemas"
import {
    authRegisterHandler,
    authLoginHandler,
    authProifleHandler
} from "../controllers/auth.controller"

const router = Router()

router.post("/api/v1/register", validateRequest(authRegisterSchema), authRegisterHandler)
router.post("/api/v1/login", validateRequest(authLoginSchema), authLoginHandler)
router.get("/api/v1/profile/:id", validateJwt, authProifleHandler)

export default router
