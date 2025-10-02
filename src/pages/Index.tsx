import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Instagram, Clock, Heart, MessageCircle } from 'lucide-react';

// Import images
import heroCake from '@/assets/hero-cake.jpg';
import alinePortrait from '@/assets/aline-portrait.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import chocolateCake2 from '@/assets/chocolate-cake2.jpg';
import strawberryCake from '@/assets/strawberry-cake.jpg';
import strawberryCake2 from '@/assets/strawberry-cake2.jpg';
import customCake from '@/assets/custom-cake.jpg';
import customCake2 from '@/assets/custom-cake2.jpg';

const Index = () => {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5531982785648?text=${encodedMessage}`, '_blank');
  };

  const products = [
    {
      title: "Bolo de Chocolate Cremoso",
      description: "Massa fofinha, recheio de brigadeiro artesanal e cobertura de ganache.",
      price: "R$ 45,00",
      image: chocolateCake,
      whatsappMessage: "Olá! Gostaria de encomendar um Bolo de Chocolate Cremoso. Poderia me dar mais informações sobre tamanhos e disponibilidade?"
    },
    {
      title: "Bolo de Morango com creme ninho",
      description: "Clássico e irresistível, com morangos frescos e chantilly leve.",
      price: "R$ 50,00",
      image: strawberryCake,
      whatsappMessage: "Olá! Tenho interesse no Bolo de Morango com Chantilly. Poderia me informar sobre os tamanhos disponíveis?"
    },
    {
      title: "Bolo de Festa Personalizado",
      description: "Cliente escolhe tema, recheios e decoração.",
      price: "Sob orçamento",
      image: customCake,
      whatsappMessage: "Olá! Gostaria de encomendar um Bolo Personalizado. Podemos conversar sobre o tema e detalhes?"
    },
    {
      title: "Ovos Trufados",
      description: "Crocantes por fora, cremosos por dentro e com recheios irresistíveis que derretem na boca.",
      price: "R$ 60,00",
      image: chocolateCake2,
      whatsappMessage: "Olá! Gostaria de encomendar um Ovo trufado. Poderia me dar mais informações sobre tamanhos e disponibilidade?"
    },
    {
      title: "Doces diversos",
      description: "Perfeitos para festas, eventos ou até para adoçar o dia! Sabores feitos com carinho e ingredientes frescos.",
      price: "R$ 100,00",
      image: strawberryCake2,
      whatsappMessage: "Olá! Tenho interesse no cento de doces. Poderia me informar sobre os sabores disponíveis?"
    },
    {
      title: "Cake Donuts",
      description: "Macia massa de bolo no formato de donut, cobertos com caldas e confeitos deliciosos. Uma opção diferente, divertida e irresistível para qualquer ocasião.",
      price: "Sob orçamento",
      image: customCake2,
      whatsappMessage: "Olá! Gostaria de encomendar uma caixa de cake donuts. Podemos conversar sobre os detalhes?"
    },
  ];

  const testimonials = [
    {
      text: "O bolo fez o maior sucesso no aniversário da minha filha! Além de lindo, estava delicioso.",
      author: "Ana S."
    },
    {
      text: "Nunca comi um bolo de chocolate tão gostoso! Super recomendo.",
      author: "João M."
    },
    {
      text: "Atendimento excelente e entrega no horário certinho. Já virei cliente fiel!",
      author: "Carla R."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Bolos artesanais feitos com carinho para adoçar os seus momentos especiais
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Bolos para aniversários, doces, ovos de chocolate e cake donuts. Tudo feito sob encomenda, com ingredientes frescos e muito amor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => handleWhatsAppClick("Olá! Gostaria de fazer um pedido. Poderia me ajudar?")}
                className="btn-whatsapp text-lg px-8 py-3"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Peça pelo WhatsApp
              </Button>
              <Button 
                onClick={() => document.getElementById('cardapio')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-3"
                size="lg"
              >
                Ver Cardápio
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={heroCake} 
                alt="Bolo artesanal Li Cakes"
                className="rounded-2xl shadow-floating max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-soft">
                <Heart className="h-8 w-8 text-primary fill-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="py-20 bg-cream-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Escolha o sabor perfeito para a sua ocasião
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada bolo é uma obra de arte culinária, feita especialmente para você
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                whatsappMessage={product.whatsappMessage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-6">
                Quem está por trás dos sabores
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Olá, eu sou <strong className="text-primary">Aline Ramos</strong>, criadora da Li Cakes – Confeitaria. 
                Desde pequena sempre amei cozinhar, e com o tempo descobri na confeitaria uma forma de espalhar 
                carinho através dos sabores.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Cada bolo que faço é preparado artesanalmente, com atenção aos detalhes, para transformar 
                momentos simples em lembranças inesquecíveis. Meu objetivo é que cada cliente sinta o mesmo 
                amor que coloco em cada receita.
              </p>
              <Button 
                onClick={() => handleWhatsAppClick("Olá Aline! Gostaria de conhecer mais sobre seus bolos e fazer um pedido.")}
                className="btn-whatsapp text-lg px-8 py-3"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar com a Aline
              </Button>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img 
                  src={alinePortrait} 
                  alt="Aline Ramos - Confeiteira Li Cakes"
                  className="rounded-2xl shadow-card max-w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 bg-primary/20 backdrop-blur-sm rounded-full p-6 shadow-soft">
                  <Heart className="h-6 w-6 text-primary fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 gradient-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground text-lg">
              Histórias doces de quem já provou nossos bolos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Peça seu bolo de forma simples e rápida
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Escolha o bolo", description: "Navegue pelo nosso cardápio e escolha seu sabor favorito" },
              { step: "2", title: "Clique em 'Pedir'", description: "Será redirecionado para nosso WhatsApp automaticamente" },
              { step: "3", title: "Combine detalhes", description: "Conversamos sobre sabor, tamanho e confeitos" },
              { step: "4", title: "Está pronto!", description: "Combine a data e hora para retirar seu bolo" }
            ].map((item, index) => (
              <Card key={index} className="card-sweet text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-playfair font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => handleWhatsAppClick("Olá! Gostaria de fazer um pedido. Como funciona?")}
              className="btn-whatsapp text-lg px-8 py-3"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fazer Pedido Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-accent-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-4">
              Fale Conosco
            </h2>
            <p className="text-muted-foreground text-lg">
              Estamos aqui para adoçar seus momentos especiais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-sweet text-center">
              <CardContent className="p-6">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">(31) 98278-5648</p>
                <Button 
                  onClick={() => window.open('https://wa.me/5531982785648', '_blank')}
                  className="btn-whatsapp w-full"
                  size="sm"
                >
                  Chamar
                </Button>
              </CardContent>
            </Card>

            <Card className="card-sweet text-center">
              <CardContent className="p-6">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-mail</h3>
                <p className="text-muted-foreground text-sm mb-4">contato@licakesconfeitaria.com</p>
                <Button 
                  onClick={() => window.open('mailto:contato@licakesconfeitaria.com', '_blank')}
                  className="btn-whatsapp w-full"
                  size="sm"
                >
                  Enviar
                </Button>
              </CardContent>
            </Card>

            <Card className="card-sweet text-center">
              <CardContent className="p-6">
                <Instagram className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-muted-foreground text-sm mb-4">@li.cakees</p>
                <Button 
                  onClick={() => window.open('https://instagram.com/li.cakees', '_blank')}
                  className="btn-whatsapp w-full"
                  size="sm"
                >
                  Seguir
                </Button>
              </CardContent>
            </Card>

            <Card className="card-sweet text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-muted-foreground text-sm mb-4">São Benedito, Santa Luzia/MG</p>
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  Seg-Sáb: 8h-18h
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-primary fill-current" />
            <span className="font-playfair font-semibold text-lg">Li Cakes – Confeitaria</span>
          </div>
          <p className="text-background/80">
            © 2024 Li Cakes. Feito com muito carinho por Aline Ramos.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
