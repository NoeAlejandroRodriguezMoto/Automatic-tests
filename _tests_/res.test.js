function restar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Ambos argumentos deben ser números");
    }
    return a - b; 
}

test('Resta de dos números positivos', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Resta de dos números negativos', () => {
    expect(restar(-3, -6)).toBe(3); 
});

test('Resta de un número negativo y un número positivo', () => {
    expect(restar(-10, 5)).toBe(-15);
});

test('Resta de un número y cero', () => {
    expect(restar(5, 0)).toBe(5);
});

test('Resta de un número y el mismo número', () => {
    expect(restar(5, 5)).toBe(0);
});

test('Resta de un número y un número no numérico', () => {
    expect(() => restar(5, "3")).toThrow();
});

test('Resta de un número y null', () => {
    expect(() => restar(5, null)).toThrow();
});

test('Resta de un número y undefined', () => {
    expect(() => restar(5, undefined)).toThrow();
});

// En esta prueba esperamos que restar dos números decimales retorne la resta correcta
test('Resta de dos números decimales', () => {
    expect(restar(0.3, 0.1)).toBeCloseTo(0.2);
});

// En esta prueba esperamos que restar un número y NaN lance un error
test('Resta de un número y NaN', () => {
    expect(() => restar(5, NaN)).toThrow();
});

// En esta prueba esperamos que restar un número y un string numérico lance un error
test('Resta de un número y un string numérico', () => {
    expect(() => restar(5, '5')).toThrow();
});

// En esta prueba esperamos que restar un número y un objeto lance un error
test('Resta de un número y un objeto', () => {
    expect(() => restar(5, {})).toThrow();
});

// En esta prueba esperamos que restar un número y un booleano lance un error
test('Resta de un número y un booleano', () => {
    expect(() => restar(5, true)).toThrow();
});

// En esta prueba esperamos que restar un número y Infinity retorne -Infinity
test('Resta de un número y Infinity', () => {
    expect(restar(5, Infinity)).toBe(-Infinity);
});

// En esta prueba esperamos que restar un número y -Infinity retorne Infinity
test('Resta de un número y -Infinity', () => {
    expect(restar(5, -Infinity)).toBe(Infinity);
});

// En esta prueba esperamos que restar Infinity e Infinity retorne NaN
test('Resta de Infinity e Infinity', () => {
    expect(restar(Infinity, Infinity)).toBeNaN();
});

// En esta prueba esperamos que restar -Infinity y -Infinity retorne NaN
test('Resta de -Infinity y -Infinity', () => {
    expect(restar(-Infinity, -Infinity)).toBeNaN();
});