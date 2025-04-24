'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PricingTableProps {
  className?: string;
}

export function PricingTable({ className }: PricingTableProps) {
  const tableVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      <Tabs defaultValue="package" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-[400px] max-w-full grid-cols-2">
            <TabsTrigger value="package">Por Paquete</TabsTrigger>
            <TabsTrigger value="event">Por Evento</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="package" className="w-full">
          <motion.div
            variants={tableVariants}
            initial="hidden"
            animate="visible"
            className="w-full overflow-hidden rounded-lg border border-border bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 font-serif text-lg text-center">Tipo</TableHead>
                  <TableHead className="w-1/4 font-serif text-lg text-center">Cantidad de Fotos</TableHead>
                  <TableHead className="w-1/4 font-serif text-lg text-right">Precio por Unidad</TableHead>
                  <TableHead className="w-1/4"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <motion.tr variants={rowVariants} className="group">
                  <TableCell rowSpan={2} className="font-serif text-lg align-middle">BÁSICO</TableCell>
                  <TableCell className="text-muted-foreground">5-10 fotos</TableCell>
                  <TableCell className="text-center">$80/u</TableCell>
                  <TableCell className="text-right">
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Más Popular</span>
                  </TableCell>
                </motion.tr>
                <motion.tr variants={rowVariants} className="group">
                  <TableCell className="text-muted-foreground">10-20 fotos</TableCell>
                  <TableCell className="text-center">$70/u</TableCell>
                  <TableCell></TableCell>
                </motion.tr>
                
                <motion.tr variants={rowVariants} className="group border-t">
                  <TableCell rowSpan={2} className="font-serif text-lg align-middle">MEDIANO</TableCell>
                  <TableCell className="text-muted-foreground">5-10 fotos</TableCell>
                  <TableCell className="text-center">$130/u</TableCell>
                  <TableCell></TableCell>
                </motion.tr>
                <motion.tr variants={rowVariants} className="group">
                  <TableCell className="text-muted-foreground">10-20 fotos</TableCell>
                  <TableCell className="text-center">$120/u</TableCell>
                  <TableCell></TableCell>
                </motion.tr>
                
                <motion.tr variants={rowVariants} className="group border-t">
                  <TableCell className="font-serif text-lg">FINE ART</TableCell>
                  <TableCell className="text-muted-foreground">7 fotos o más</TableCell>
                  <TableCell className="text-center">$230/u</TableCell>
                  <TableCell></TableCell>
                </motion.tr>
              </TableBody>
            </Table>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="event">
          <motion.div
            variants={tableVariants}
            initial="hidden"
            animate="visible"
            className="w-full overflow-hidden rounded-lg border border-border bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3 font-serif text-lg text-center">Servicio</TableHead>
                  <TableHead className="w-1/3 font-serif text-lg text-center">Detalles</TableHead>
                  <TableHead className="w-1/3 font-serif text-lg text-right">Precio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <motion.tr variants={rowVariants} className="group">
                  <TableCell className="font-medium">Lightroom 150 fotos</TableCell>
                  <TableCell className="text-muted-foreground">Se entrega en una semana</TableCell>
                  <TableCell className="text-right">$800</TableCell>
                </motion.tr>
                <motion.tr variants={rowVariants} className="group">
                  <TableCell className="font-medium">Lightroom 300 fotos</TableCell>
                  <TableCell className="text-muted-foreground">Se entrega en una semana</TableCell>
                  <TableCell className="text-right">$1000</TableCell>
                </motion.tr>
                <motion.tr variants={rowVariants} className="group">
                  <TableCell className="font-medium" colSpan={3}>
                    <p className="text-sm text-muted-foreground italic mt-2">
                      * Se pide entregar ya las fotos seleccionadas
                    </p>
                  </TableCell>
                </motion.tr>
              </TableBody>
            </Table>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}