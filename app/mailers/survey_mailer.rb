class SurveyMailer < ApplicationMailer

  def send_survey(survey, sender, recipients)
    puts recipients
    @survey = survey
    @url = 'http://ec2.rails.joshparsons.me:3004/surveys/' + @survey.token
    mail(to: recipients, subject: @survey.title)    
    
  
  end

  def send_receipt(survey, response, recipients)
    @survey = survey
    @response = response
    @url = 'http://ec2.rails.joshparsons.me:3004/surveys/' + @survey.token
    mail(to: recipients, subject: @survey.title)    

  end

end
