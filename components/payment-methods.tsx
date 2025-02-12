import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CreditCard, Banknote, ArrowRightLeft, ShoppingCart } from 'lucide-react'

const methods = [
  {
    name: "Efectivo",
    description: "Pago en efectivo al momento del servicio",
    icon: Banknote
  },
  {
    name: "Transferencia",
    description: "Transferencia bancaria directa",
    icon: ArrowRightLeft
  },
  {
    name: "Tarjetas de Crédito",
    description: "Aceptamos todas las tarjetas",
    icon: CreditCard
  },
  {
    name: "MercadoPago",
    description: "Pago fácil y seguro",
    icon: ShoppingCart
  }
]

export function PaymentMethods() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Medios de Pago
          </h2>
          <p className="text-lg text-muted-foreground">
            Múltiples opciones para tu comodidad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method) => (
            <Card key={method.name}>
              <CardHeader>
                <method.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{method.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

