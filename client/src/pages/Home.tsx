import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Award, Heart, Clock, Mail, MessageCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-hero_ef634c6a.jpg";
const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-wedding_9df40aea.jpg";

const features = [
  { icon: Heart, title: "Feito com Amor", desc: "Cada bolo é preparado com carinho e dedicação para tornar seu momento especial." },
  { icon: Award, title: "Qualidade Premium", desc: "Ingredientes selecionados e técnicas refinadas para um sabor incomparável." },
  { icon: Clock, title: "Encomenda Personalizada", desc: "Criamos o bolo dos seus sonhos sob medida para cada ocasião." },
  { icon: Star, title: "Clientes Satisfeitos", desc: "Centenas de clientes felizes com nossas criações artesanais." },
];

const testimonials = [
  {
    name: "Marina Silva",
    role: "Noiva",
    text: "O bolo do meu casamento foi perfeito! Taise superou todas as expectativas. Recomendo para todos!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Pai de Aniversariante",
    text: "Meu filho amou o bolo! Ficou lindo e delicioso. Voltaremos com certeza para o próximo aniversário.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Empresária",
    text: "Usamos os bolos da Taise para nosso evento corporativo. Todos os clientes pediram o contato!",
    rating: 5,
  },
];

const galleryImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-hero_ef634c6a.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-wedding_9df40aea.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-hero_ef634c6a.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-wedding_9df40aea.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-hero_ef634c6a.jpg",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663505194534/PThi8BHL38Un8J878g3nSp/cake-wedding_9df40aea.jpg",
];

const promotions = [
  { title: "Combo Festa", desc: "1 Bolo + 2 Doces Finos", price: "R$ 150", discount: "20% OFF" },
  { title: "Bolo Casamento", desc: "3 Andares Decorado", price: "R$ 350", discount: "15% OFF" },
  { title: "Doces Finos", desc: "Caixa com 12 Unidades", price: "R$ 80", discount: "10% OFF" },
];

export default function Home() {
  const { data: featuredProducts, isLoading } = trpc.products.featured.useQuery({ limit: 6 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Bolo elegante Taise Sena Confeitaria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container pt-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Badge className="bg-accent/90 text-accent-foreground mb-4 text-xs tracking-widest uppercase font-medium px-3 py-1">
                ✨ Confeitaria Artesanal
              </Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-tight mb-4">
                Momentos Doces,<br />
                <span className="text-accent italic">Memórias Eternas</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
                Bolos artesanais e doces finos criados com amor para tornar cada celebração inesquecível.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/catalogo">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg gap-2">
                    Ver Catálogo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-white/50 text-white hover:bg-white/10 bg-transparent">
                    Encomendar
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs tracking-widest uppercase">Role para baixo</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </section>

      {/* ── Features Strip ────────────────────────────────────────── */}
      <section className="bg-white border-y border-border py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-2 p-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promotions Section ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="border-accent text-accent mb-3 text-xs tracking-widest uppercase">
              🎁 Promoções Especiais
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Ofertas do Mês
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Aproveite nossas promoções exclusivas e economize em suas encomendas especiais.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, i) => (
              <motion.div
                key={promo.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white rounded-2xl p-8 border border-border hover:border-primary/50 transition-all">
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    {promo.discount}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{promo.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{promo.desc}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold text-primary">{promo.price}</span>
                  </div>
                  <Link href="/contato">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                      Encomendar Agora
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="border-accent text-accent mb-3 text-xs tracking-widest uppercase">
              Nossa Vitrine
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Nossos Bestsellers
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Conheça os bolos mais pedidos pelos nossos clientes satisfeitos.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted rounded-2xl h-72 animate-pulse" />
              ))}
            </div>
          ) : featuredProducts && featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              <p className="font-serif text-lg">Em breve nossos produtos estarão disponíveis aqui.</p>
              <p className="text-sm mt-2">Adicione produtos pelo painel administrativo.</p>
            </div>
          )}

          <div className="text-center mt-10">
            <Link href="/catalogo">
              <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white gap-2 px-8">
                Ver Catálogo Completo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="border-accent text-accent mb-3 text-xs tracking-widest uppercase">
              📸 Galeria
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Nossas Criações
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Veja a beleza e a arte em cada um dos nossos bolos artesanais.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={image}
                  alt={`Criação ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="border-accent text-accent mb-3 text-xs tracking-widest uppercase">
              ⭐ Depoimentos
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
              Histórias reais de clientes satisfeitos com nossas criações.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Teaser ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={ABOUT_IMAGE}
                  alt="Taise Sena Confeitaria"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 border border-accent/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <Badge variant="outline" className="border-accent text-accent text-xs tracking-widest uppercase">
                Por Que Escolher Taise
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Arte e Sabor em Cada Criação
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Taise Sena Confeitaria nasceu da paixão pela arte da confeitaria. Com anos de experiência e dedicação, transformamos ingredientes simples em obras de arte que encantam os olhos e deliciam o paladar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada bolo é único, criado especialmente para você e para o seu momento especial. Do casamento ao aniversário, da festa ao dia a dia — celebramos a vida com doçura.
              </p>
              <Link href="/sobre">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2 mt-2">
                  Conheça Nossa História <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Newsletter Section ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Badge variant="outline" className="border-accent text-accent mb-3 text-xs tracking-widest uppercase">
              📧 Newsletter
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Receba Nossas Novidades
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fique por dentro de nossas promoções, novas criações e dicas de confeitaria. Inscreva-se na nossa newsletter!
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
              />
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 gap-2">
                Inscrever <Mail className="w-4 h-4" />
              </Button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-600 font-medium"
              >
                ✓ Obrigado por se inscrever! Verifique seu email.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[oklch(0.22_0.04_30)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Pronto para Encomendar?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
              Entre em contato conosco e vamos criar o bolo perfeito para o seu momento especial.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg gap-2">
                  Fazer Encomenda <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <WhatsAppButton />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton floating />
    </div>
  );
}
