import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

//EVERY route in this files impplicity starts with /todos
router.get('/', skillsCtrl.index)
/* GET skills listing. */
// router.get('/', function(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// })

export {
  router
}
