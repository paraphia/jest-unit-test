const app = require('./app');
const request = require('supertest');

describe('/users POST',()=>{

	describe("given a username and password",()=>{
		//Если данные корректны то сохраняем пользователя в БД и далее
		// получаем результат от БД в виде json с Content - Type app/json + cтатус 200
		test("Should responde 200 if username and password are correct",async ()=>{
			const response = await request(app).post('/users').send({
				username: "username",
				password: "password"
			})
			expect(response.statusCode).toBe(200);
		})
		//Проверка, возвращает ли сервер json в ответ
		test("Check if send json content type after user inserted",async ()=>{
			const response = await request(app).post('/users').send({
				username: "username",
				password: "password"
			})
			expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
		})
		//Проверка, если ли в ответе userId
		test("Check if send json content type after user inserted",async ()=>{
			const response = await request(app).post('/users').send({
				username: "username",
				password: "password"
			})
			expect(response.body.userId).toBeDefined()
		})
	})

	describe("when username and password are missing", ()=>{
		//Возвращаем 400 если данные приведены не верно
		test("Check if wrong post will cause error 400",async ()=>{
			const response = await request(app).post('/users').send({
				username: "username"
			})
			expect(response.statusCode).toBe(400);
		})
		test("Check if wrong post will cause error 400",async ()=>{
			const response = await request(app).post('/users').send({
				username: "us",
				password: '123132'
			})
			expect(response.statusCode).toBe(400);
		})
	})	
})