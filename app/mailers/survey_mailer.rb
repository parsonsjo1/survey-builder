class SurveyMailer < ApplicationMailer

  def send_survey(survey, sender, recipients)

    @survey = survey
    @url = 'http://ec2.rails.joshparsons.me:3004/surveys/' + @survey.token
    recipients.each do |recipient|
      mail(to: recipient, subject: @survey.title)    
    end
  
  end

  def send_receipt(survey, response, recipients)
    @survey = survey
    @response = response
    @url = 'http://ec2.rails.joshparsons.me:3004/surveys/' + @survey.token
    recipients.each do |recipient|
      mail(to: recipient, subject: @survey.title)    
    end   
  end

end
