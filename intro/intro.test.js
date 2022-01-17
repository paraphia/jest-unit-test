const sum = require('./intro')
// console.log(sum(3,2));
test('Function should return sum of two numbers', ()=>{
	expect(sum(1,3)).toBe(4)
})
test('Mathcers', ()=>{
	expect(sum(1,5)).toBeGreaterThan(4);
	expect(sum(1,5)).toBeGreaterThanOrEqual(6);
	expect(sum(1,5)).toBeLessThanOrEqual(6);
})
test('Testing float values', ()=>{
	expect(sum(0.1,0.3)).toBe(0.4);
})

// Добавить параметр --coverage что бы видеть детальное тестирование