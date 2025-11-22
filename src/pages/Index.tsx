import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Резюме отправлено! Мы свяжемся с вами при появлении подходящих вакансий.');
  };

  const handleVacancySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Вакансия размещена! Мы начнем поиск подходящих кандидатов.');
  };

  const vacancies = [
    { id: 1, title: 'Менеджер по продажам', company: 'ООО "Техносервис"', salary: '60 000 - 80 000 ₽', type: 'Полная занятость', location: 'Москва' },
    { id: 2, title: 'Бухгалтер', company: 'ИП Иванов', salary: '50 000 - 70 000 ₽', type: 'Полная занятость', location: 'Москва' },
    { id: 3, title: 'Программист Python', company: 'ООО "ИТ-Решения"', salary: '100 000 - 150 000 ₽', type: 'Удаленная работа', location: 'Удаленно' },
    { id: 4, title: 'Дизайнер интерфейсов', company: 'Студия "Креатив"', salary: '70 000 - 90 000 ₽', type: 'Полная занятость', location: 'Москва' },
    { id: 5, title: 'Водитель-курьер', company: 'ООО "Доставка+"', salary: '45 000 - 60 000 ₽', type: 'Полная занятость', location: 'Москва' },
    { id: 6, title: 'HR-специалист', company: 'Кадровый центр', salary: '55 000 - 75 000 ₽', type: 'Полная занятость', location: 'Москва' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">РаботаПлюс</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </button>
            <button onClick={() => scrollToSection('vacancies')} className="text-sm font-medium transition-colors hover:text-primary">
              Вакансии
            </button>
            <button onClick={() => scrollToSection('job-seekers')} className="text-sm font-medium transition-colors hover:text-primary">
              Соискателям
            </button>
            <button onClick={() => scrollToSection('employers')} className="text-sm font-medium transition-colors hover:text-primary">
              Работодателям
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium transition-colors hover:text-primary">
              О нас
            </button>
          </nav>

          <Button onClick={() => scrollToSection('job-seekers')} className="hidden md:flex">
            Разместить резюме
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Помогаем найти работу с 2015 года
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Найдите работу своей мечты
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Кадровое агентство полного цикла. Помогаем соискателям найти работу, а работодателям — лучших сотрудников
              </p>

              <Card className="w-full max-w-2xl shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input 
                      placeholder="Должность, компания, ключевые слова..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="lg" onClick={() => scrollToSection('vacancies')} className="md:w-auto">
                      <Icon name="Search" className="mr-2 h-5 w-5" />
                      Найти работу
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3500+</div>
                  <div className="text-sm text-muted-foreground">Успешных трудоустройств</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">450+</div>
                  <div className="text-sm text-muted-foreground">Компаний-партнеров</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1200+</div>
                  <div className="text-sm text-muted-foreground">Актуальных вакансий</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">9 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке труда</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vacancies" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Актуальные вакансии</h2>
              <p className="text-lg text-muted-foreground">Свежие предложения от работодателей города</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {vacancies.map((vacancy) => (
                <Card key={vacancy.id} className="hover:shadow-lg transition-all group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {vacancy.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {vacancy.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-lg font-semibold text-accent">
                        <Icon name="Wallet" className="h-5 w-5" />
                        {vacancy.salary}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" className="h-4 w-4" />
                        {vacancy.type}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MapPin" className="h-4 w-4" />
                        {vacancy.location}
                      </div>
                      <Button className="w-full mt-4" onClick={() => toast.info('Откликнуться на вакансию можно после размещения резюме')}>
                        Откликнуться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" onClick={() => toast.info('Показаны все доступные вакансии')}>
                Показать еще вакансии
                <Icon name="ChevronDown" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <section id="job-seekers" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Для соискателей</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Мы поможем вам найти работу, соответствующую вашим навыкам и ожиданиям. 
                  Разместите резюме и получайте предложения от работодателей.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="FileText" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Разместите резюме</h3>
                      <p className="text-muted-foreground">Заполните анкету с информацией о вашем опыте и навыках</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Search" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Мы подберем вакансии</h3>
                      <p className="text-muted-foreground">Наши специалисты найдут подходящие предложения и свяжутся с вами</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="HandshakeIcon" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Получите работу</h3>
                      <p className="text-muted-foreground">Мы организуем собеседования и поможем с трудоустройством</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <Icon name="GraduationCap" className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Консультации</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Бесплатные консультации по составлению резюме</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Icon name="Shield" className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Поддержка</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Сопровождение на всех этапах трудоустройства</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Разместить резюме</CardTitle>
                  <CardDescription>Заполните форму, и мы начнем поиск работы для вас</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleResumeSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Фамилия *</label>
                        <Input placeholder="Иванов" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя *</label>
                        <Input placeholder="Иван" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input placeholder="email@example.com" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Желаемая должность *</label>
                      <Input placeholder="Например: Менеджер по продажам" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Желаемая зарплата *</label>
                      <Input placeholder="Например: 60000" type="number" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Образование *</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" required>
                        <option value="">Выберите образование</option>
                        <option value="secondary">Среднее</option>
                        <option value="vocational">Среднее специальное</option>
                        <option value="incomplete-higher">Неоконченное высшее</option>
                        <option value="higher">Высшее</option>
                        <option value="multiple">Несколько высших</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Опыт работы</label>
                      <Textarea placeholder="Опишите ваш опыт работы, навыки и достижения..." rows={4} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Send" className="mr-2 h-5 w-5" />
                      Отправить резюме
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="employers" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Card className="shadow-xl order-2 lg:order-1">
                <CardHeader>
                  <CardTitle>Разместить вакансию</CardTitle>
                  <CardDescription>Опубликуйте вакансию, и мы найдем лучших кандидатов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleVacancySubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Название компании *</label>
                      <Input placeholder="ООО Название" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Название вакансии *</label>
                      <Input placeholder="Например: Менеджер по продажам" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Зарплата от *</label>
                        <Input placeholder="50000" type="number" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Зарплата до *</label>
                        <Input placeholder="80000" type="number" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Тип занятости *</label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" required>
                        <option value="">Выберите тип</option>
                        <option value="full">Полная занятость</option>
                        <option value="part">Частичная занятость</option>
                        <option value="remote">Удаленная работа</option>
                        <option value="project">Проектная работа</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Местоположение *</label>
                      <Input placeholder="Москва" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Требования к кандидату</label>
                      <Textarea placeholder="Опишите требования: образование, опыт, навыки..." rows={4} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Описание вакансии</label>
                      <Textarea placeholder="Опишите обязанности и условия работы..." rows={4} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Контактный телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" type="tel" required />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Plus" className="mr-2 h-5 w-5" />
                      Опубликовать вакансию
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Для работодателей</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Найдите квалифицированных сотрудников быстро и эффективно. 
                  Доступ к большой базе резюме и профессиональный подбор персонала.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Building2" className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Разместите вакансию</h3>
                      <p className="text-muted-foreground">Опубликуйте информацию о свободных позициях в вашей компании</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Users" className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Получите кандидатов</h3>
                      <p className="text-muted-foreground">Мы подберем подходящих специалистов из нашей базы резюме</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="CheckCircle2" className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Закройте вакансию</h3>
                      <p className="text-muted-foreground">Проведите собеседования и найдите идеального сотрудника</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6">
                  <h3 className="font-semibold text-xl mb-4">Преимущества работы с нами</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Доступ к базе из 5000+ проверенных резюме</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Предварительный отбор и классификация кандидатов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Помощь в организации собеседований</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Гарантия качества подбора персонала</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">О кадровом агентстве</h2>
                <p className="text-lg text-muted-foreground">Профессиональный подход к трудоустройству</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <Icon name="Target" className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Наша миссия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Помочь каждому безработному гражданину найти достойную работу, а каждому работодателю — 
                      квалифицированных сотрудников. Мы верим, что правильное трудоустройство меняет жизнь к лучшему.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Icon name="Lightbulb" className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Как мы работаем</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ведем учет и классификацию данных о соискателях на основании резюме. 
                      Получаем информацию о вакансиях от предприятий города и подбираем оптимальные варианты трудоустройства.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Icon name="Award" className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Наши достижения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      За 9 лет работы успешно трудоустроили более 3500 человек. 
                      Сотрудничаем с 450+ компаниями города. 92% наших клиентов рекомендуют нас своим знакомым.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Icon name="FileCheck" className="h-10 w-10 text-primary mb-3" />
                    <CardTitle>Легальность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Все наши услуги полностью легальны. Производим отчисления в налоговые органы 
                      и предоставляем отчетность в органы государственной статистики.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Icon name="Phone" className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-muted-foreground">+7 (495) 765-43-21</p>
                    </div>
                    <div>
                      <Icon name="Mail" className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@rabotaplus.ru</p>
                      <p className="text-muted-foreground">hr@rabotaplus.ru</p>
                    </div>
                    <div>
                      <Icon name="MapPin" className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва</p>
                      <p className="text-muted-foreground">ул. Трудовая, д. 15</p>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                      <Icon name="Clock" className="inline h-4 w-4 mr-2" />
                      Режим работы: Пн-Пт 9:00-18:00, Сб 10:00-15:00
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">РаботаПлюс</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Кадровое агентство полного цикла. Помогаем людям найти работу с 2015 года.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соискателям</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('vacancies')} className="hover:text-primary transition-colors">Вакансии</button></li>
                <li><button onClick={() => scrollToSection('job-seekers')} className="hover:text-primary transition-colors">Разместить резюме</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Консультации</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Работодателям</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('employers')} className="hover:text-primary transition-colors">Разместить вакансию</button></li>
                <li><button onClick={() => scrollToSection('employers')} className="hover:text-primary transition-colors">База резюме</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Подбор персонала</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">О компании</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Контакты</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 РаботаПлюс. Все права защищены. Лицензия на осуществление деятельности по трудоустройству.</p>
            <p className="mt-2">Отчетность предоставляется в налоговые органы и органы государственной статистики в соответствии с законодательством РФ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
