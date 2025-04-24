'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { PackageCard } from './PackagesCard';
import { PricingTable } from './PricingTable';
import { MoveRight } from 'lucide-react';

export function PackagesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const basicPackageFeatures = [
    { text: 'Quitar objetos de la imagen' },
    { text: 'Corrección de luces y sombras' },
    { text: 'Corrección de color' },
  ];

  const mediumPackageFeatures = [
    { text: 'Quitar objetos de la imagen' },
    { text: 'Corrección de luces y sombras' },
    { text: 'Corrección de color' },
    { text: 'Edición de objetos' },
    { text: 'Enfoque y/o desenfoque de objetos' },
    { text: 'Limpiar imagen' },
    { text: 'Dodge and burn' },
    { text: 'Otros detalles en photoshop' },
  ];

  const premiumPackageFeatures = [
    { text: 'Edición fine art cero' },
    { text: 'Photoshop avanzado' },
    { text: 'Hacer tu lista detallada de lo que buscas cambiar' },
    { text: 'Enviar foto en raw o en la mejor calidad posible' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-chart-1/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-chart-2/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={titleVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4 tracking-tight">
              Paquetes Fotográficos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Elige el paquete que mejor se adapte a tus necesidades y transforma tus momentos en recuerdos eternos
            </p>
          </motion.div>

          {/* Package Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <PackageCard
              title="Edición Básica"
              price="$95"
              features={basicPackageFeatures}
              imageSrc="https://images.pexels.com/photos/3444345/pexels-photo-3444345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={0}
            />
            
            <PackageCard
              title="Edición Media"
              price="$150"
              features={mediumPackageFeatures}
              popular={true}
              imageSrc="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={1}
            />
            
            <PackageCard
              title="Fine Art"
              price="$250"
              features={premiumPackageFeatures}
              imageSrc="https://images.pexels.com/photos/2403851/pexels-photo-2403851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              index={2}
            />
          </motion.div>

          {/* Pricing Details */}
          <motion.div
            variants={titleVariants}
            className="text-center mt-16 mb-8"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-medium mb-4 flex items-center justify-center gap-2">
              <span>Detalles de Precios</span>
              <MoveRight className="h-6 w-6 animate-pulse" />
            </h3>
          </motion.div>

          <PricingTable />
          
          {/* CTA */}
          <motion.div 
            variants={titleVariants}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              ¿Tienes un proyecto específico en mente? Contáctanos para una cotización personalizada.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Contactar Ahora
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}