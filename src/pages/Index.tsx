import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="MonitorSmartphone" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">TechPro</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-sm font-medium transition-colors hover:text-primary">
              Продукция
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium transition-colors hover:text-primary">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium transition-colors hover:text-primary">
              О компании
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
            Оставить заявку
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32 animate-fade-in">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
                Профессиональные решения для вашего бизнеса
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Продажа, ремонт, сборка компьютерной техники и монтаж локальных сетей
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')} className="text-base">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-base">
                  <Icon name="Wrench" className="mr-2 h-5 w-5" />
                  Наши услуги
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Icon name="Package" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Оптовые закупки</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Работаем напрямую с дилерами, гарантируем лучшие цены</p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Icon name="Warehouse" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Складское хранение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Всегда в наличии популярная техника и комплектующие</p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Icon name="Truck" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Доставка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Быстрая доставка по городу или самовывоз со склада</p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <Icon name="BadgeCheck" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Гарантия качества</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Официальная гарантия на всю технику и комплектующие</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог продукции</h2>
              <p className="text-lg text-muted-foreground">Широкий ассортимент компьютерной техники и комплектующих</p>
            </div>

            <Tabs defaultValue="computers" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="computers">Компьютеры</TabsTrigger>
                <TabsTrigger value="components">Комплектующие</TabsTrigger>
                <TabsTrigger value="peripherals">Периферия</TabsTrigger>
              </TabsList>

              <TabsContent value="computers" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon name="Laptop" className="h-20 w-20 text-primary/60" />
                    </div>
                    <CardHeader>
                      <CardTitle>Офисные ПК</CardTitle>
                      <CardDescription>Надежные решения для бизнеса</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Готовые конфигурации для офисной работы, документооборота</p>
                      <p className="text-2xl font-bold text-primary">от 35 000 ₽</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <Icon name="Gamepad2" className="h-20 w-20 text-accent/60" />
                    </div>
                    <CardHeader>
                      <CardTitle>Игровые ПК</CardTitle>
                      <CardDescription>Максимальная производительность</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Мощные системы для современных игр и стриминга</p>
                      <p className="text-2xl font-bold text-primary">от 85 000 ₽</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon name="Cpu" className="h-20 w-20 text-primary/60" />
                    </div>
                    <CardHeader>
                      <CardTitle>Рабочие станции</CardTitle>
                      <CardDescription>Для профессионалов</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Высокопроизводительные системы для рендеринга, моделирования</p>
                      <p className="text-2xl font-bold text-primary">от 120 000 ₽</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="components" className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: 'Cpu', name: 'Процессоры', desc: 'Intel, AMD' },
                    { icon: 'HardDrive', name: 'Накопители', desc: 'SSD, HDD' },
                    { icon: 'MemoryStick', name: 'Память', desc: 'DDR4, DDR5' },
                    { icon: 'Webhook', name: 'Видеокарты', desc: 'NVIDIA, AMD' },
                    { icon: 'Boxes', name: 'Корпуса', desc: 'Различные размеры' },
                    { icon: 'Zap', name: 'Блоки питания', desc: '400W - 1200W' },
                    { icon: 'Wind', name: 'Охлаждение', desc: 'Воздушное, водяное' },
                    { icon: 'Monitor', name: 'Мониторы', desc: 'Full HD, 4K' }
                  ].map((item, idx) => (
                    <Card key={idx} className="text-center hover:shadow-lg transition-all">
                      <CardHeader>
                        <Icon name={item.icon as any} className="h-12 w-12 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="peripherals" className="mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: 'Keyboard', name: 'Клавиатуры', desc: 'Механические, мембранные' },
                    { icon: 'Mouse', name: 'Мыши', desc: 'Игровые, офисные' },
                    { icon: 'Headphones', name: 'Наушники', desc: 'Проводные, беспроводные' },
                    { icon: 'Printer', name: 'Принтеры', desc: 'Струйные, лазерные' },
                    { icon: 'Webcam', name: 'Веб-камеры', desc: 'HD, Full HD' },
                    { icon: 'Speaker', name: 'Акустика', desc: '2.0, 2.1, 5.1' },
                    { icon: 'Wifi', name: 'Сетевое оборудование', desc: 'Роутеры, свитчи' },
                    { icon: 'Cable', name: 'Кабели', desc: 'Все типы подключения' }
                  ].map((item, idx) => (
                    <Card key={idx} className="text-center hover:shadow-lg transition-all">
                      <CardHeader>
                        <Icon name={item.icon as any} className="h-12 w-12 text-primary mx-auto mb-2" />
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground">Полный спектр услуг для вашего бизнеса</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <CardHeader>
                  <Icon name="Wrench" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Ремонт техники</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Диагностика неисправностей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Замена комплектующих</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Чистка от пыли</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Замена термопасты</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <CardHeader>
                  <Icon name="PcCase" className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Сборка ПК</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Подбор конфигурации</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Сборка под ключ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Установка ПО</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Тестирование системы</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <CardHeader>
                  <Icon name="Network" className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Монтаж сетей</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Проектирование ЛВС</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Прокладка кабелей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Настройка оборудования</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Обслуживание сетей</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden group hover:shadow-xl transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <CardHeader>
                  <Icon name="SearchCheck" className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Диагностика</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Выездная диагностика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Оценка состояния</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Консультация специалиста</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Смета на ремонт</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Как мы работаем</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Оформление заказа</h4>
                        <p className="text-muted-foreground">Посетите торговый зал или оставьте заявку онлайн</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Получение товара</h4>
                        <p className="text-muted-foreground">Самовывоз со склада или доставка курьером</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Гарантийное обслуживание</h4>
                        <p className="text-muted-foreground">Полная поддержка и сервисное обслуживание</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Clock" className="h-5 w-5 text-primary" />
                        Режим работы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб: 10:00 - 17:00</p>
                      <p className="text-muted-foreground">Вс: выходной</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="MapPin" className="h-5 w-5 text-primary" />
                        Где мы находимся
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                      <p className="text-muted-foreground">Торговый зал и сервисный отдел</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  TechPro — профессиональная компьютерная компания с многолетним опытом работы на рынке. 
                  Мы специализируемся на продаже, ремонте и сборке компьютерной техники, а также предоставляем 
                  услуги по разработке и монтажу локальных вычислительных сетей.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Наши специалисты имеют высокую квалификацию и регулярно проходят обучение новым технологиям. 
                  Мы работаем напрямую с официальными дилерами, что позволяет предлагать лучшие цены и гарантировать 
                  подлинность всей продукции.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">12+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                    <div className="text-sm text-muted-foreground">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">специалистов</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="col-span-2">
                  <CardHeader>
                    <Icon name="Trophy" className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Наши преимущества</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Официальная гарантия на всю продукцию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Собственный склад с большим ассортиментом</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Квалифицированные специалисты</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Конкурентные цены</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Shield" className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Надежность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">Работаем только с сертифицированной продукцией</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Sparkles" className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>Качество</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">Контроль качества на всех этапах работы</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
                <p className="text-lg text-muted-foreground">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Заполните форму ниже, и наш специалист свяжется с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя *</label>
                        <Input placeholder="Иван Иванов" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Телефон *</label>
                        <Input placeholder="+7 (999) 123-45-67" type="tel" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="email@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Тип обращения *</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required>
                        <option value="">Выберите тип обращения</option>
                        <option value="purchase">Покупка техники</option>
                        <option value="repair">Ремонт</option>
                        <option value="assembly">Сборка ПК</option>
                        <option value="network">Монтаж сети</option>
                        <option value="consultation">Консультация</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Сообщение</label>
                      <Textarea placeholder="Опишите вашу задачу или вопрос..." rows={5} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Send" className="mr-2 h-5 w-5" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <Card className="text-center">
                  <CardHeader>
                    <Icon name="Phone" className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Телефон</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (495) 765-43-21</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Icon name="Mail" className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">info@techpro.ru</p>
                    <p className="text-muted-foreground">sales@techpro.ru</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Icon name="MapPin" className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">Адрес</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">г. Москва</p>
                    <p className="text-muted-foreground">ул. Примерная, д. 123</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="MonitorSmartphone" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">TechPro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные решения в области компьютерной техники и IT-инфраструктуры
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Компьютеры</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Комплектующие</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">Периферия</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Ремонт техники</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Сборка ПК</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Монтаж сетей</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Диагностика</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 TechPro. Все права защищены. Официальная отчетность предоставляется в налоговые органы и органы государственной статистики.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
