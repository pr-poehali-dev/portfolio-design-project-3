import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const skills = [
    { category: 'Графический дизайн', years: '15+', items: ['Figma', 'Adobe Photoshop', 'CorelDRAW'] },
    { category: 'Веб & UX/UI дизайн', years: '2+', items: ['Проектирование UI', 'Адаптивные сайты', 'Прототипы'] },
    { category: 'Техническое', years: '', items: ['HTML/CSS', 'Tilda', 'After Effects'] }
  ];

  const services = [
    { 
      icon: 'Palette', 
      title: 'Разработка фирменного стиля и айдентики',
      description: 'От концепции до готового брендбука. Логотипы, цветовые схемы, типографика, фирменные элементы.'
    },
    { 
      icon: 'FileText', 
      title: 'Дизайн и макетирование полиграфии',
      description: 'От визиток до многостраничных каталогов. Полная допечатная подготовка и технические требования.'
    },
    { 
      icon: 'Award', 
      title: 'Брендирование сувенирной продукции',
      description: 'Применение фирменного стиля на различных носителях. Сувениры, упаковка, POS-материалы.'
    },
    { 
      icon: 'Layout', 
      title: 'Проектирование UX и дизайн UI',
      description: 'Исследование пользователей, wireframes, интерактивные прототипы, пользовательские интерфейсы.'
    },
    { 
      icon: 'Globe', 
      title: 'Создание и макетирование сайтов',
      description: 'Полный цикл веб-дизайна: от концепции и прототипов до готовых дизайн-макетов для разработки.'
    },
    { 
      icon: 'Code', 
      title: 'Верстка на Tilda и HTML/CSS',
      description: 'Техническая реализация проектов на Tilda (Zero Block, кастомный CSS), чистая адаптивная верстка.'
    }
  ];

  const portfolioItems = [
    {
      title: 'Веб-платформа для бизнеса',
      category: 'Веб-дизайн',
      image: '/img/4c64ea4f-f273-410d-bdbe-52d7f3b1add6.jpg'
    },
    {
      title: 'Фирменный стиль компании',
      category: 'Айдентика',
      image: '/img/4cff8add-e284-4955-ac97-daa3f52d9a78.jpg'
    },
    {
      title: 'Мобильное приложение',
      category: 'UI/UX дизайн',
      image: '/img/ba5be904-0751-4047-8cc4-74ebaadd4fe7.jpg'
    },
    {
      title: 'Журнал и полиграфия',
      category: 'Печатный дизайн',
      image: '/img/27717508-df55-4d6a-a119-697c3aa2a307.jpg'
    },
    {
      title: 'Интернет-магазин',
      category: 'E-commerce',
      image: '/img/7f6fa9aa-efb7-4b5e-97b7-f3c1910e7087.jpg'
    },
    {
      title: 'Упаковка и брендинг',
      category: 'Packaging',
      image: '/img/ed468842-174d-4338-9e5a-549d35d1cdfc.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-xl font-montserrat">Анна Артемьева</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
              Анна Артемьева
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Веб-дизайнер | UX/UI дизайнер | Графический дизайнер
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Профессиональный графический и веб-дизайнер с 15-летним опытом работы в рекламных агентствах. 
              Специализируюсь на создании комплексных визуальных решений — от фирменного стиля до адаптивных интерфейсов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать портфолио
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Ключевые компетенции
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="h-full border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="font-montserrat text-lg">{skill.category}</span>
                    {skill.years && <Badge variant="secondary" className="bg-primary text-primary-foreground">{skill.years}</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-montserrat mb-6">
              Преимущества работы со мной
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-left">Способность вести несколько проектов одновременно</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-left">Понимание полного цикла создания продукта</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-left">Ориентация на бизнес-задачи клиента</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" size={24} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-left">Готовность к сложным и нестандартным проектам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              С чем я работаю
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Я создаю комплексные визуальные решения — от стратегии и концепции до технической реализации. 
              Моя сила — в понимании полного цикла, что гарантирует проектам безупречный результат на любом носителе.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 border-border/50 hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold font-montserrat leading-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Портфолио работ
            </h2>
            <p className="text-lg text-muted-foreground">
              Избранные проекты из моей практики
            </p>
          </div>

          {/* Portfolio Slider */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4 scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {portfolioItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <Card className="overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="font-montserrat text-lg leading-tight">{item.title}</CardTitle>
                      <CardDescription className="mt-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                          {item.category}
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Контакты
            </h2>
            <p className="text-lg text-muted-foreground">
              Готова обсудить ваш проект
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid gap-6">
              <Card className="p-6 border-border/50">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 920 901-93-02</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">El_anuta@mail.ru</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border/50">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <p className="text-muted-foreground">@Yolanuta</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-semibold font-montserrat">Анна Артемьева</div>
            <div className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;