const cloneArray = require('./clone');

test('Check if copies array correctly', ()=>{
	const array = [1,2,3];
	// expect(cloneArray(array)).toBe(array);
	expect(cloneArray(array)).toEqual(array);
	expect(cloneArray(array)).not.toBe(array); //Не вернула ли ф.ция тот же массив а создала новый
})