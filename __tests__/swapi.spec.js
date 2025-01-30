const request = require('supertest');

it("Deve buscar detalhes da pessoa especifica e existente",async () =>{
    const response =  await request("https://swapi.dev/api").get('/people/1')

    expect(response.status).toBe(200)
    expect(response.body).toBeDefined()
    expect(response.body.vehicles.length).toBeGreaterThan(0)
    expect(response.body.name).toBe('Luke Skywalker')
}) 

it("Deve retornar erro quando busca uma pessoa inexistente",async () =>{
    const response =  await request("https://swapi.dev/api").get('/people/1000000')
    expect(response.status).toBe(404)
}) 