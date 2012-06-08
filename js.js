$(function() {
  Array.prototype.sum = function() {
  	for (var i = 0, sum = 0; i < this.length; sum += this[i++]);
  	return sum;
  };

  Number.prototype.round = function(point) {
    return Math.round(this * Math.pow(10, point)) / Math.pow(10, point);
  };

  System = {
    questionContainer: null,
    answersContainer: null,
    answersTemplateContainer: null,
    resultContainer: null,
    current: 0,
    questions: [
      ["Существует ли в компании разработанная политика информационной безопасности, все положения которой на практике внедрены в информационную систему?", "Необходимость разработки политики безопасности в соответствии с требованиями 150 17999 (150 27002) на сегодняшний день является очевидным фактом для любой, даже небольшой организации.Политика безопасности в целом - это совокупность программных и аппаратных средств; организационных, административных, юридических и физических мер; методов, средств, правил и инструкций, четко регламентирующих все аспекты деятельности организации и обеспечивающих её безопасность. Политика безопасности является одним из жизненно важных документов организации. К сожалению, еще встречаются отдельные руководители, которые считают, что им нечего защищать. Опыт большинства экспертов по информационной безопасности говорит, что в любой организации всегда найдется электронный  ресурс, требующий того или иного уровня защиты. Напомним лишь, что разработка плана действий на случай непредвиденных обстоятельств является неотъемлемой частью любой политики безопасности. И, как показывает практика, те предприятия, у которых был разработан и протестирован подобный план непрерывности ведения бизнеса, понесли значительно меньшие убытки, чем организации, пренебрегшие им. Кроме своего прямого назначения, разработка политики безопасности дает неожиданный, на первый взгляд, побочный эффект: в результате анализа информационных потоков, инвентаризации информационных ресурсов и а ранжирования обрабатываемой информации по степени ценности руководство организации получает целостную картину одного из самых сложных объектов управления - информационной системы, что положительно влияет на качество управления бизнесом в целом, и как следствие, улучшает его прибыльность и эффективность. Требование стандарта перечислить все объекты информационной инфраструктуры, подлежащие защите. Это непросто сделать даже в средних компаниях, не говоря уже о крупных. Зачастую, эта задача решается с привлечением внешней компании-аудитора, специализирующейся на вопросах информационной безопасности. Информационная система любой организации непостоянна. \"Все течет, и все изменяется\" - это в полной мере применимо и здесь. Крайне редко и только у небольших компаний можно встретить статичную неизменяемую информационную систему. Обычно же информационная система представляет собой круговорот постоянных изменений и нововведений, которые необходимо учитывать и отслеживать в политике безопасности. Именно поэтому так важно соблюдение требования периодического анализа и обновления политики безопасности.", 5],
      ["Учитывает ли политика безопасности требования по обеспечению непрерывности ведения бизнеса?", "Политика безопасности должна учитывать требования непрерывности ведения бизнеса.",  4],
      ["Контролируется ли доступ сторонних организаций к информационным ресурсам организации?", "Необходимо контролировать доступ сторонних организаций к информационным ресурсам.", 4],
      ["Существует ли в организации один руководитель, ответственный за все мероприятия, относящиеся к информационной безопасности?", "Должен быть назначен один руководитель, ответственный за все мероприятия, относящиеся к информационной безопасности.", 4],
      ["Определены ли ответственность и обязанности по защите отдельных ресурсов и выполнению конкретных действий по обеспечению безопасности?", "Должны быть четко определены ответственность и обязанности по защите отдельных ресурсов и выполнению конкретных действий по обеспечению безопасности.", 4],
      ["Определены ли процедуры снятия категории критичности с информации? ", "Должны быть определены процедуры снятия категории критичности с информации ", 4],
      ["Четко ли определены зоны ответственности каждого владельца ресурса, несущего ответственность за обеспечение его безопасности?", "Должны быть четко определены зоны ответственности каждого владельца ресурса, несущего ответственность за обеспечение его безопасности. Для каждого ресурса (или процесса) должен быть назначен ответственный сотрудник из числа руководителей. Все его обязанности и степень ответственности должны быть закреплены документально. Должны быть четко определены и задокументированы уровни полномочий каждого ответственного лица. Для каждого ресурса должен быть определен и закреплен документально список прав доступа (матрица доступа)", 4],
      ["Присвоены ли информации категории, учитывающие критичность данной информации для организации (например, учитывающие необходимость обеспечения целостности и доступности информации)?", "Информации должны быть присвоены категории, учитывающие критичность данной информации для организации, например, учитывающие необходимость обеспечения целостности и доступности информации.", 4],
      ["Учтены ли все основные информационные ресурсы?", "Должны быть учтены все основные информационные ресурсы.", 4],
      ["Определен ли в организации охраняемый периметр?", "Должен быть четко определен охраняемый периметр. Охраняемый периметр должен удовлетворять следующим требованиям: Не должно быть \"мертвых зон\”, разрывов в охраняемом периметре; Должен осуществляться контроль доступа к охраняемому периметру. Доступ должен быть разрешен только для авторизованных сотрудников; Для помещений с особо важными объектами должна осуществляться физическая защита от пожара и затопления; Все пожарные выходы в охраняемом периметре должны быть защищены сигнализацией и запираться.", 5],
      ["Подписывают ли пользователи сторонних организаций соглашение о конфиденциальности, чтобы получить доступ к информационным ресурсам организации?", "Чтобы получить доступ к информационным ресурсам организации, пользователи сторонних организаций должны подписывать соглашение о конфиденциальности отдельно, т.к. они не всегда заключают трудовой договор.", 4],
      ["Установлены ли системы обнаружения проникновения, сигнализация на всех внешних дверях, окнах, свободных площадях внутри периметра безопасности, рабочих помещениях?", "Охраняемый периметр должен быть защищен соответствующими средствами физического контроля доступа: Должен осуществляется контроль посетителей охраняемого периметра; Должны фиксироваться время и дата посещения охраняемого периметра; При доступе к защищаемой информации должны использоваться процедуры аутентификации; Персонал должен иметь хорошо видимые идентификаторы; Права доступа пользователей к ресурсам в охраняемом периметре должны регулярно пересматриваться. Должны быть установлены системы обнаружения проникновения, сигнализация на всех внешних дверях, окнах, свободных площадях внутри периметра безопасности, рабочих помещениях.", 4],
      ["Располагаются ли резервные носители информации и резервное оборудование в отдельном месте, на безопасном расстоянии?", "Резервные носители информации и резервное оборудование должны располагаться в отдельном месте на безопасном расстоянии.", 4],
      ["Расположены ли огнеопасные и взрывчатые материалы на безопасном расстоянии от охраняемых зон?", "Огнеопасные и взрывчатые материалы должны быть расположены на безопасном расстоянии от охраняемых зон.", 4],
      ["Изолированы ли объекты, требующие специальной защиты?", "Для снижения риска угроз окружающей среды и неавторизованного доступа к оборудованию, объекты, требующие специальной защиты, должны быть изолированы.", 4],
      ["Учитывается ли возможное воздействие факторов окружающей среды на работу оборудования?", "Необходимо учитывать возможное воздействие факторов окружающей среды на работу оборудования.", 2],
      ["Учитываются ли воздействия от происшествий на соседних объектах (пожар у соседей, наводнение или затопление верхнего этажа, взрыв на улице и т.д.)?", "Должны быть учтены воздействия от происшествий на соседних объектах (пожар у соседей, наводнение или затопление верхнего этажа, взрыв на улице и т.д.).", 3],
      ["Применяются ли методы защиты для предотвращения прослушивания или повреждения силовых, телекоммуникационных и сетевых кабелей?", "Для предотвращения прослушивания или повреждения силовых, телекоммуникационных и сетевых кабелей должны применяться дополнительные методы защиты.", 5],
      ["Разделены ли силовые и коммуникационные кабели для снижения влияния электромагнитных помех?", "Силовые и телекоммуникационные линии должны проходить под землей (если возможно). В противном случае, им требуется адекватная альтернативная защита.", 4],
      ["Защищены ли сетевые кабели от несанкционированного подключения или повреждения?", "Для предотвращения прослушивания или повреждения силовых, телекоммуникационных и сетевых кабелей должны применяться дополнительные методы защиты: Сетевые кабели должны быть защищены от несанкционированного подключения или повреждения; Для снижения влияния электромагнитных помех, силовые и коммуникационные кабели должны быть разделены. Выполнение требования по разделению силовых и коммуникационных кабелей позволит избежать появления наведенных электромагнитных помех в коммуникационных кабелях. Более того, в ряде стран совместная прокладка таких кабелей запрещена правилами пожарной безопасности.", 3],
      ["Производится ли физическое уничтожение или гарантированное стирание остаточной информации с устройств хранения при выведении их из эксплуатации?", "Устройства хранения информации, содержащие ценную информацию, при выведении из эксплуатации должны быть физически уничтожены, либо должно быть проведено гарантированное стирание с них остаточной информации. Критичная информация может быть скомпрометирована вследствие небрежной утилизации оборудования (жестких дисков, магнитных носителей). Перед утилизацией оборудования необходимо гарантировать, что конфиденциальные данные и лицензированное программное обеспечение было удалено. Поврежденные запоминающие устройства, содержащие особо ценные данные, могут потребовать оценки рисков для того, чтобы определить, следует ли их уничтожать или ремонтировать.", 5],
      ["Используется ли резервный генератор для защиты оборудования от сбоев в системе электропитания и других неполадок в электрической сети?", "Оборудование необходимо защищать от сбоев в системе электропитания и других неполадок в электрической сети, используя для этого резервный генератор.", 4],
      ["Разработаны ли процедуры восстановления и перезапуска систем после сбоев, а также планы действий в экстремальных ситуациях?", "Чтобы гарантировать, что требования для новых версий программного обеспечения определены, согласованы, задокументированы и протестированы, должны быть разработаны процедуры восстановления и перезапуска систем после сбоев, а также планы действий в экстремальных ситуациях", 4],
      ["Существует ли план обеспечения непрерывности ведения бизнеса?", "Необходимо наличие плана обеспечения непрерывности ведения бизнеса.", 4],
      ["Установлено ли в информационной системе антивирусное программное обеспечение?", "Для защиты от вредоносного программного обеспечения должны быть установлено антивирусное программное обеспечение", 5],
      ["Принимаются ли в организации специальные меры для защиты от вредоносного программного обеспечения?", " Для защиты от вредоносного программного обесепечения должно применяться антивирусное программное обеспечение, персональные межсетевые экраны, системы контроля запуска приложений и контентной фильтрации сетевого трафика являются жизненно необходимыми компонентами системы защиты. На сегодняшний день в компании должна быть разработана четкая политика использования антивирусного программного обеспечения, а также процедуры реагирования на инциденты, связанные с вирусными атаками и активностью троянских программ", 4],
      ["Осуществляется ли в организации регулярное резервное копирование информации?", "Необходимо регулярное резервное копирование информации. Важным требованием стандарта является создание вместе с резервной копией еще и сопроводительных описывающих документов, что часто упускается из вида. Резервные копии вместе с инструкциями по восстановлению должны храниться в месте, территориально отдаленном от основной копии информации. Важным требованием является необходимость хранения резервных копий в удалении от основного места расположения информации. Тогда, в случае происшествия, резервная копия не будет. Уничтожена вместе с информационной системой. Для особо важной информации необходимо сохранять три последних копии. К резервным копиям должны быть применены такие же меры защиты, как и определенные в политике безопасности меры защиты оригинальных носителей данных. Носители, на которые осуществляется резервное копирование, должны регулярно проверяться на отсутствие сбоев. Необходимо проводить регулярные проверки процедур восстановления с целью поддержания возможности восстановления данных в установленном порядке и за гарантированный промежуток времени. Необходимо проводить практические тренинги персонала с целью поддержания возможности восстановления данных в установленном порядке и за гарантированный промежуток времени.", 5],
      ["Возможно ли применение нелицензионного программного обеспечения?", "В информационной системе организации должно применяться только лицензионное программное обеспечение. В компании должен быть составлен перечень разрешенного к использованию программного обеспечения. Все программное обеспечение должно быть лицензионным. С целью снижения рисков, связанных с получением программного обеспечения через сети общего пользования или на носителях, этот процесс должен быть формализован в виде соответствующего документа.", 4],
      ["Осуществляется ли регулярная регистрация действий персонала в системных журналах регистрации?", "Действия персонала должны подвергаться обязательной регистрации в системных журналах регистрации. Обеспечение протоколирования действий операторов в случае ошибок является неотъемлемым требованием политики безопасности. Особо стоит обратить внимание на труднореализуемые на практике требования записи в файл журнала системных ошибок и действий по их коррекции и требования подтверждения корректного обращения с входными и выходными данными. Регистрация данных должна содержать следующие записи: Время старта и остановки системы; Системные ошибки и действия по их исправлению; Подтверждение корректного обращения с входными и выходными данными; Идентификатор оператора, совершившего действие, которое повлекло запись в журнал регистрации.", 4],
      ["Применяются ли средства контроля для защиты системной документации от несанкционированного доступа? ", "Для защиты системной документации от несанкционированного доступа, системная документация, находящаяся в открытой сети, должна соответственно защищаться.", 3],
      ["Осуществляется ли проверка того, что уровень доступа соответствует бизнес-задачам, политике безопасности организации и не противоречит распределению обязанностей?", "Доступ в многопользовательской информационной системе должен контролироваться формальными процедурами регистрации пользователей, которые включают проверку того, что уровень доступа соответствует бизнес задачам, политике безопасности организации и не противоречит распределению обязанностей.", 4],
      ["Предоставляют ли поставщики сетевых услуг четкое описание атрибутов безопасности всех используемых сервисов?", "При использовании организацией различных общедоступных и коммерческих сетевых сервисов, поставщики сетевых услуг должны предоставлять четкое описание атрибутов безопасности всех используемых сервисов", 3],
      ["Применяются ли для особо критичных систем изолированное аппаратное обеспечение и специальные правила обработки информации?", "Особо критичные системы требуют изолированного аппаратного обеспечения и, при необходимости, специальных правил обработки информации.", 4],
      ["Проводится ли тестирование поставщиков систем и услуг (гарантия, что внешние предоставляемые услуги и продукты будут соответствовать контрактным обязательствам)?", "В рамках плана непрерывного ведения бизнеса необходимо проводить тестирование поставщиков систем и услуг.", 4],
      ["Проходят ли информационные системы регулярную проверку на соответствие стандартам безопасности?", "Информационные системы должны проходить регулярную проверку на соответствие стандартам безопасности. Проверка технического соответствия включает проверку операционной системы на предмет корректного функционирования аппаратных и программных систем управления. Проверка технического соответствия должна производиться либо лично инженером, либо автоматизированным средством, отчет которого будет анализироваться затем инженером. Проверка технического соответствия должна включать тесты на проникновение, которые должны проводиться независимыми экспертами", 4],
      ["Защищаются ли важные для организации документы от потери, уничтожения и подделки?", "Необходимо защищать важные для организации документы от потери, уничтожения и подделки.", 4],
    ],
    answers: [],
    answersSum: 0,
    expectedSum: 0,

    init: function(questionContainer, answersContainer, answersTemplateContainer, resultContainer) {
      var obj = this;

      this.questionContainer = $(questionContainer);
      this.answersContainer = $(answersContainer);
      this.answersTemplateContainer = $(answersTemplateContainer);
      this.resultContainer = $(resultContainer);
      this._showQuestion(this.current);

      $("#next").live("click", function() {
        var answer = $('input:radio[name=answer]:checked').val();

        if (answer)
          obj.answers.push(answer == "yep");
        else {
          alert("Выберите вариант!");
          return false;
        }

        if (obj._nextQestionExists()) {
          obj.current++;
          obj._showQuestion(obj.current);
        } else
          obj._showResult();
      });
    },

    _showResult: function() {
      var text,
          result = 0,
          stars = "",
          errors = "",
          obj = this;

      this.questionContainer.html("Результаты");
      this._countSums();


      result = (this.answersSum / this.expectedSum * 5).round(0);

      for (var i = 0; i < result; i++)
        stars += "&star;";

      $.each(this.answers, function(key, value) {
        if (!value)
          errors += '<div>' + obj.questions[key][1] + '</div>';
      });

      this.answersContainer.html("<span>" + stars + "</span>");

      if (errors.length > 0)
        this.resultContainer.html(errors).show();
    },

    _countSums: function() {
      obj = this;

      $.each(this.answers, function(key, value) {
        if (value)
          obj.answersSum += obj.questions[key][2];

        obj.expectedSum += obj.questions[key][2];
      });
    },

    _showQuestion: function(number) {
      if (!this.questions[number])
        return false;

      this.questionContainer.html(this.questions[number][0]).show();
      this.answersContainer.html(this._answersTemplate());
      this.answersContainer.show();

      this.current = number;
    },

    _answersTemplate: function() {
      return this.answersTemplateContainer.html();
    },

    _nextQestionExists: function() {
      return !(this.questions[this.current + 1] == undefined)
    }
  };

  System.init("#question", "#answers", "#answer-template", "#result");
});
