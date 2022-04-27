const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

// Activities

// 1.- Print the name for each "explorer"
explorers.forEach(explorer => { console.log(explorer.name) })

// 2.- Print the stack for each "explorer"
explorers.forEach(explorer => { console.log(explorer.stack) })

// 3.- New list of the stack for each "explorer"
const stack_list = explorers.map(explorer => explorer.stack )
console.log(stack_list)

// 4.- New list about the "explorers" where the stack includes "js"
const new_explorers = explorers.filter( explorer => explorer.stack.includes('js') )
console.log(new_explorers)

// 5.- Find the "explorer" from CDMX
const explorer_from_CDMX = explorers.find(explorer => explorer.city === 'CDMX')
console.log(explorer_from_CDMX)

// 6.- Sum of the exercises completed
let initialice = 0
const sum_exercises_completed = explorers.reduce( ( sum, elemment) => sum + elemment.exercises_completed, initialice )
console.log(sum_exercises_completed)

// 7.- Validate if any explorer has the exercisesFinished in frontend as true
const exercisesFinished = explorers.some( explorer => explorer.missions.frontend.exercisesFinished === true )
console.log(exercisesFinished)

// 8.- Validate if all explorer has the "isFinished" in "onboarding" as true
const isFinished = explorers.every( explorer => explorer.missions.onboarding.isFinished === true )
console.log(isFinished)