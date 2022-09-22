import { skills } from '../data/skills.js'

// router.get('/', function(req, res) {

// })
function index(req, res) {
  res.render('skills/index', {
    skills: skills
  })
}

export {
  index
}