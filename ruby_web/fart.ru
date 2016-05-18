require 'json'

app = proc do |env|
  [
    200,          # Status code
    {             # Response headers
      'Content-Type' => 'application/javascript',
      'Access-Control-Allow-Origin' => '*',
    },
    [%x[ #{"/Applications/'Yubico Authenticator.app'/Contents/MacOS/yubioath-cli show " + env['QUERY_STRING'].to_s.split('&')[0].to_s.split('=')[1].to_s + " 2>&1"} ]]        # Response body
  ]
end

run app
