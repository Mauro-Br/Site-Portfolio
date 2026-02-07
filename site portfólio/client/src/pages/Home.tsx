/*
Design Philosophy: Retrofuturismo Otimista dos Anos 60
- Geometria lúdica com formas orgânicas e diagonais
- Paleta: azul petróleo (#0A4D68), coral (#FF6B6B), mostarda (#F4A261), creme (#FAF3E0)
- Tipografia: Outfit (display) + Manrope (body)
- Animações com bounce e movimento implícito
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Calendar, 
  ShoppingCart, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Phone
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Site para Comércio",
      description: "Site profissional e responsivo para sua loja ou empresa aparecer na internet e vender mais.",
      price: "R$ 500 - R$ 1.200",
      deliveryTime: "5 dias",
      features: ["Design moderno", "Responsivo", "SEO otimizado"]
    },
    {
      icon: ShoppingCart,
      title: "Cardápio Digital",
      description: "Cardápio online interativo para restaurantes, bares e lanchonetes com fotos e preços atualizáveis.",
      price: "R$ 300 - R$ 800",
      deliveryTime: "3 dias",
      features: ["Fácil atualização", "QR Code", "Sem mensalidade"]
    },
    {
      icon: Calendar,
      title: "Sistema de Agendamento",
      description: "Automatize agendamentos para barbearias, clínicas, salões e consultórios. Menos faltas, mais lucro.",
      price: "R$ 600 - R$ 1.500",
      deliveryTime: "7 dias",
      features: ["WhatsApp integrado", "Lembretes automáticos", "Painel de controle"]
    },
    {
      icon: TrendingUp,
      title: "Landing Page",
      description: "Página de vendas otimizada para converter visitantes em clientes. Ideal para lançamentos e campanhas.",
      price: "R$ 400 - R$ 1.200",
      deliveryTime: "4 dias",
      features: ["Alta conversão", "Formulários", "Analytics"]
    },
    {
      icon: MessageSquare,
      title: "Automação WhatsApp",
      description: "Automatize respostas, envie mensagens em massa e integre seu WhatsApp com outros sistemas.",
      price: "R$ 500 - R$ 2.000",
      deliveryTime: "5 dias",
      features: ["Respostas automáticas", "Integração API", "Relatórios"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Projetos entregues em até 7 dias"
    },
    {
      icon: CheckCircle2,
      title: "Preços Transparentes",
      description: "Sem surpresas, você sabe quanto vai pagar"
    },
    {
      icon: Zap,
      title: "Suporte Direto",
      description: "Fale comigo direto no WhatsApp"
    }
  ];

  const stats = [
    { value: "50+", label: "Projetos Entregues" },
    { value: "40+", label: "Clientes Satisfeitos" },
    { value: "5 dias", label: "Tempo Médio de Entrega" },
    { value: "100%", label: "Taxa de Satisfação" }
  ];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/1sB8Y3R2MWaA6GhocMVeKY/sandbox/j8ouT1H9mDD71jonhEFmbH-img-1_1770503047000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMXNCOFkzUjJNV2FBNkdob2NNVmVLWS9zYW5kYm94L2o4b3VUMUg5bURENzFqb25oRUZtYkgtaW1nLTFfMTc3MDUwMzA0NzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RAfc6y-H0pLwoJTlm00xlgxzdE2jAyoVCQE08vWPKf-XmGnE7FrsBccc0MSbJ4RyrdFiAobGwQjRaonTwx0gUDD1NpHZG76A4J9sIWI4NBWHdiecFd5y2zW46jllpjYjMolJaypnTB77t5bHQSaom~1VAL8Fa0hqd9C6czwEvJUdUqUwpfHI0P-etUZn1nVv6luBiZTX3o4QKod7zvR2Uk9x0ScvunIPfe59s1T3OyxFWauTqQCZjdWYihZHrppfdcSDZlLCNleY63MYKpa-QzJWX~8snqGlB~dW0hD820-ZXeITdLOFIoRkV5mzP5uCuC5n5QgBJFxlxqZqH2m7eg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-transparent" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 text-base px-4 py-2 bg-accent text-accent-foreground animate-bounce-in">
              <Sparkles className="w-4 h-4 mr-2" />
              Disponível para novos projetos
            </Badge>
            
            <h1 
              className={`mb-6 text-foreground transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Transforme Seu Negócio com Tecnologia que Funciona
            </h1>
            
            <p 
              className={`text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed transition-all duration-700 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Desenvolvo <span className="font-semibold text-primary">sites, sistemas e automações</span> que ajudam pequenos e médios negócios a vender mais, perder menos clientes e economizar tempo.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-shadow"
                onClick={scrollToContact}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Serviços
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground diagonal-clip-top">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent text-accent-foreground">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 bg-secondary text-secondary-foreground">
              Serviços
            </Badge>
            <h2 className="mb-4 text-foreground">
              Soluções Práticas para Seu Negócio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o serviço que seu negócio precisa agora. Preços transparentes, entrega rápida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden"
                style={{
                  borderRadius: '24px 4px 24px 4px'
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                    <Badge variant="outline" className="text-sm border-accent text-accent">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.deliveryTime}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {service.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Pagamento único
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={scrollToContact}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-base px-4 py-2 bg-primary text-primary-foreground">
              Resultados
            </Badge>
            <h2 className="mb-4 text-foreground">
              Projetos que Geraram Resultados Reais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada projeto é desenvolvido pensando em aumentar suas vendas e facilitar sua rotina.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src="https://private-us-east-1.manuscdn.com/sessionFile/1sB8Y3R2MWaA6GhocMVeKY/sandbox/j8ouT1H9mDD71jonhEFmbH-img-3_1770503050000_na1fn_cG9ydGZvbGlvLXNob3djYXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMXNCOFkzUjJNV2FBNkdob2NNVmVLWS9zYW5kYm94L2o4b3VUMUg5bURENzFqb25oRUZtYkgtaW1nLTNfMTc3MDUwMzA1MDAwMF9uYTFmbl9jRzl5ZEdadmJHbHZMWE5vYjNkallYTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ask4QTAbu19coI~R8IPRsF69ooA4TBJH43HA00KX7p~IxyZbmsTPflJThMMXjpHZWIHgQ2gTJ8dkVctbPmz5fM8Wn9wCgnzEMsTaoMgrNthD7o43V0gj7KUgNLvEIC8btt9PhLUjpGLFj1PLAut7zBv46no0qRb8Ka0QCcG93-msR5PCT486-mVftRBkmLLLznUN~vX0Nmjtcp0QWQwsy8EZEH7dAIT93Q-e~5pmhfvuFbtjsqs79V5DES9898ViiXBKEKBG8G20bvdu5x-PNuF9KOO0dZgtr-X8Ku1IVikLk4-9K2NAeRUDHNuLadXtgGoAPcYZAH32K8wsdlWosA__"
              alt="Portfolio showcase"
              className="w-full h-auto"
            />
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-2">
              <div className="text-4xl font-bold text-accent mb-2">+150%</div>
              <p className="text-muted-foreground">Aumento médio em vendas online</p>
            </Card>
            <Card className="text-center p-6 border-2">
              <div className="text-4xl font-bold text-accent mb-2">-60%</div>
              <p className="text-muted-foreground">Redução em faltas de agendamento</p>
            </Card>
            <Card className="text-center p-6 border-2">
              <div className="text-4xl font-bold text-accent mb-2">10h/sem</div>
              <p className="text-muted-foreground">Tempo economizado com automação</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="contato"
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/1sB8Y3R2MWaA6GhocMVeKY/sandbox/j8ouT1H9mDD71jonhEFmbH-img-4_1770503048000_na1fn_Y3RhLWJhY2tncm91bmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMXNCOFkzUjJNV2FBNkdob2NNVmVLWS9zYW5kYm94L2o4b3VUMUg5bURENzFqb25oRUZtYkgtaW1nLTRfMTc3MDUwMzA0ODAwMF9uYTFmbl9ZM1JoTFdKaFkydG5jbTkxYm1RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TQ6J4qENdlVf8ipxw0ECoHJkamruz252J9-VStoGNfn6K2BsZAkG28Unb2jjn8J6cWrlWkxINsff7GutfS-J6zU4Dx8yObsHovcp-oSFxz7Du401nRvSIdprk7a6JDIaSOADWKqhswdKeR~VqLvJjCFxlz3ma1EKcI30vy5eug5Qd0zekrtOrRTEvkjPpHGWlGMZUqM8BmNq4d8k5DfnrzUHjXj2mxh6yHa1pEcnv5c-r~SBANaifmdVY0AkuuzKPA1n18cc2Cwn1BfdlRA~pOaPSTSeFcEavLUC7a8mTfa9bUBUD8n4Ui4LWmBexpqaaZ3zC-KrCXUmTQ7X33Iy4Q__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/95 via-accent/85 to-accent/95" />
        
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 text-accent-foreground">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-accent-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Entre em contato agora e receba um orçamento personalizado em até 24 horas. Sem compromisso, sem enrolação.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('https://wa.me/5531999999999?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
            >
              <Phone className="mr-2 w-5 h-5" />
              WhatsApp: (31) 99999-9999
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="p-6 bg-background/95 backdrop-blur">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <p className="text-sm text-muted-foreground">Resposta em até 24 horas</p>
            </Card>
            <Card className="p-6 bg-background/95 backdrop-blur">
              <div className="text-2xl font-bold text-primary mb-2">Grátis</div>
              <p className="text-sm text-muted-foreground">Orçamento sem compromisso</p>
            </Card>
            <Card className="p-6 bg-background/95 backdrop-blur">
              <div className="text-2xl font-bold text-primary mb-2">7 dias</div>
              <p className="text-sm text-muted-foreground">Entrega rápida garantida</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h3 className="text-2xl font-bold mb-4">Mauro</h3>
          <p className="text-primary-foreground/80 mb-6">
            Desenvolvedor Freelancer | PHP • JavaScript • Laravel
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2026 Mauro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
