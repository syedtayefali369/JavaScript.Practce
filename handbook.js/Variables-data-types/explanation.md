# Variables & Data Types

## 🎯 What You'll Learn
- Different ways to declare variables
- JavaScript data types
- Type conversion and checking
- Best practices for naming variables

## 📝 Key Concepts

### Variable Declarations
- **var**: Function-scoped, hoisted (avoid in modern JS)
- **let**: Block-scoped, can be reassigned
- **const**: Block-scoped, cannot be reassigned

### Data Types

#### Primitive Types (immutable)
1. **String** - Text data
2. **Number** - Integer and floating-point numbers
3. **Boolean** - true/false values
4. **Undefined** - Variable declared but not assigned
5. **Null** - Intentional absence of value
6. **Symbol** - Unique identifiers
7. **BigInt** - Large integers

#### Reference Types (mutable)
1. **Object** - Key-value pairs
2. **Array** - Ordered lists
3. **Function** - Reusable code blocks

## 💡 Important Notes

### Hoisting
- `var` declarations are hoisted to top of scope
- `let` and `const` are not hoisted (Temporal Dead Zone)

### Type Coercion
JavaScript automatically converts types in operations:
```javascript
"5" + 3 = "53"  // string concatenation
"5" - 3 = 2     // numeric subtraction