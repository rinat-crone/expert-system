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
      ["Вопрос", "Комментарий", 2],
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