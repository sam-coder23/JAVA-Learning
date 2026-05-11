// Variable and keywords : Keywords are those which has a special meaning in java and we cannot use them as variable name. 
// Variable is a name which is used to store data in memory. 

// Variable and Declaration :
 // let var const 
 // var is old we don't use anymore 
 // let is something for eg in cricket i am playing cricket starting from my score = 0 and this this score is going to change whenever i score a run .
 // const is something which is constant and cannot be changed eg : value of Pie = 3.14

 // Declaration and initialization :
 // Declaration means ek variable ko naam dediya .
 // Initialization means ek variable ko value dediya .

 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------
 // Temporal Dead Zone :
    // It is basically means you cannot acces a varaible before its declaration.
    // Example : 
    // console.log(score); // ReferenceError: Cannot access 'score' before initialization
    // let score = 0;
    // But using var we can access the variable before declaration but it will give us undefined because of hoisting.
    // It does not giver error value rather gives undefined because of hoisting.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Difference between var, let, and const (short points):
 //  * VAR
 // Function-scoped (not block-scoped)
 // Can be re-declared and re-assigned
 // Hoisted and initialized as undefined 

 //  * LET
 // Block-scoped ({ })
 // Cannot be re-declared, but can be re-assigned
 // Hoisted but not initialized (temporal dead zone)
 // Preferred for variables that will change

 //  *   CONST
 // Block-scoped
 // Cannot be re-declared or re-assigned
 // Must be initialized at declaration
 // For objects/arrays: contents can change, reference cannot
 // Preferred by default for safer code

 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------

 