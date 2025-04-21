import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EdificabilidadApp() {
  const [area, setArea] = useState(0);
  const [localidad, setLocalidad] = useState("");
  const [uso, setUso] = useState("");
  const [resultado, setResultado] = useState(null);

  const data = {
    Usaquén: {
      residencial: { alturaMax: "6 pisos", IO: "65%", IC: "3.2", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "8 pisos", IO: "75%", IC: "4.5", retiros: "1.5m laterales, 2.5m posterior" },
    },
    Chapinero: {
      residencial: { alturaMax: "6 pisos", IO: "60%", IC: "3.0", retiros: "3m laterales, 4m posterior" },
      comercial: { alturaMax: "8 pisos", IO: "75%", IC: "5.0", retiros: "2m laterales, 3m posterior" },
    },
    Santafe: {
      residencial: { alturaMax: "5 pisos", IO: "70%", IC: "3.0", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "6 pisos", IO: "80%", IC: "4.0", retiros: "1m laterales, 2m posterior" },
    },
    SanCristobal: {
      residencial: { alturaMax: "4 pisos", IO: "65%", IC: "2.8", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "5 pisos", IO: "70%", IC: "3.5", retiros: "1.5m laterales, 2m posterior" },
    },
    Usme: {
      residencial: { alturaMax: "3 pisos", IO: "60%", IC: "2.5", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "4 pisos", IO: "65%", IC: "3.0", retiros: "1m laterales, 2m posterior" },
    },
    Tunjuelito: {
      residencial: { alturaMax: "4 pisos", IO: "65%", IC: "2.8", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "5 pisos", IO: "70%", IC: "3.5", retiros: "1m laterales, 2m posterior" },
    },
    Bosa: {
      residencial: { alturaMax: "5 pisos", IO: "70%", IC: "3.0", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "6 pisos", IO: "75%", IC: "3.8", retiros: "1m laterales, 2m posterior" },
    },
    Kennedy: {
      residencial: { alturaMax: "5 pisos", IO: "70%", IC: "3.5", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "7 pisos", IO: "80%", IC: "4.2", retiros: "1m laterales, 2m posterior" },
    },
    Fontibón: {
      residencial: { alturaMax: "5 pisos", IO: "65%", IC: "3.0", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "6 pisos", IO: "70%", IC: "3.8", retiros: "1.5m laterales, 2m posterior" },
    },
    Engativá: {
      residencial: { alturaMax: "6 pisos", IO: "70%", IC: "3.5", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "8 pisos", IO: "75%", IC: "4.5", retiros: "1.5m laterales, 2.5m posterior" },
    },
    Suba: {
      residencial: { alturaMax: "5 pisos", IO: "65%", IC: "3.2", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "7 pisos", IO: "70%", IC: "4.0", retiros: "1m laterales, 2m posterior" },
    },
    BarriosUnidos: {
      residencial: { alturaMax: "6 pisos", IO: "70%", IC: "3.6", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "8 pisos", IO: "75%", IC: "4.8", retiros: "1.5m laterales, 2.5m posterior" },
    },
    Teusaquillo: {
      residencial: { alturaMax: "6 pisos", IO: "65%", IC: "3.2", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "7 pisos", IO: "70%", IC: "4.0", retiros: "1.5m laterales, 2m posterior" },
    },
    LosMartires: {
      residencial: { alturaMax: "5 pisos", IO: "65%", IC: "3.0", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "6 pisos", IO: "70%", IC: "3.8", retiros: "1m laterales, 2m posterior" },
    },
    AntonioNariño: {
      residencial: { alturaMax: "5 pisos", IO: "70%", IC: "3.5", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "6 pisos", IO: "75%", IC: "4.0", retiros: "1.5m laterales, 2m posterior" },
    },
    PuenteAranda: {
      residencial: { alturaMax: "5 pisos", IO: "65%", IC: "3.0", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "6 pisos", IO: "70%", IC: "3.8", retiros: "1m laterales, 2m posterior" },
    },
    LaCandelaria: {
      residencial: { alturaMax: "4 pisos", IO: "60%", IC: "2.5", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "5 pisos", IO: "65%", IC: "3.0", retiros: "1.5m laterales, 2m posterior" },
    },
    RafaelUribe: {
      residencial: { alturaMax: "4 pisos", IO: "65%", IC: "2.8", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "5 pisos", IO: "70%", IC: "3.2", retiros: "1.5m laterales, 2m posterior" },
    },
    CiudadBolivar: {
      residencial: { alturaMax: "3 pisos", IO: "60%", IC: "2.5", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "4 pisos", IO: "65%", IC: "3.0", retiros: "1m laterales, 2m posterior" },
    },
    Sumapaz: {
      residencial: { alturaMax: "2 pisos", IO: "50%", IC: "2.0", retiros: "2m laterales, 3m posterior" },
      comercial: { alturaMax: "2 pisos", IO: "55%", IC: "2.2", retiros: "2m laterales, 3m posterior" },
    },
  };

  const calcularEdificabilidad = () => {
    const zona = data[localidad]?.[uso];
    if (zona) {
      setResultado({
        ...zona,
        area,
        areaConstruible: `${parseFloat(zona.IC) * area} m²`,
      });
    } else {
      setResultado({ error: "No hay datos disponibles para esa combinación." });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card>
        <CardContent className="space-y-4">
          <h1 className="text-xl font-bold">Consulta de Edificabilidad</h1>
          <Input
            type="number"
            placeholder="Área del lote en m²"
            onChange={(e) => setArea(Number(e.target.value))}
          />
          <Input
            type="text"
            placeholder="Localidad (ej. Kennedy, Chapinero, Suba...)"
            onChange={(e) => setLocalidad(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Uso del suelo (residencial, comercial)"
            onChange={(e) => setUso(e.target.value)}
          />
          <Button onClick={calcularEdificabilidad}>Calcular</Button>

          {resultado && (
            <div className="mt-4 p-4 border rounded bg-gray-100">
              {resultado.error ? (
                <p className="text-red-600">{resultado.error}</p>
              ) : (
                <ul className="space-y-1">
                  <li><strong>Área del lote:</strong> {resultado.area} m²</li>
                  <li><strong>Altura máxima:</strong> {resultado.alturaMax}</li>
                  <li><strong>Índice de ocupación (IO):</strong> {resultado.IO}</li>
                  <li><strong>Índice de construcción (IC):</strong> {resultado.IC}</li>
                  <li><strong>Área construible estimada:</strong> {resultado.areaConstruible}</li>
                  <li><strong>Retiros:</strong> {resultado.retiros}</li>
                </ul>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

