# Yubi-AWS-autoMFA
The purpose of the script is to automaticaly forward the MFA key from the Yubikey ( authenticator CLI) to the AWS login page without interaction.

####WARNING######

The current version of the server is open for Cross-site-scripting. This should be fixed. (However the server is only listening to localhost.)

####WARNING######
Install Thin server:
TODO: links and documentation

Generate HTTPS certificates:
TODO: links and documentation

Note: server1.key and server1.crt is your (self signed) SSL certificates.

To launch thin server:
 /Library/Ruby/Gems/2.0.0/gems/thin-1.6.4/bin/thin start -R ~/ruby_web/fart.ru --ssl --ssl-key-file ~/server1.key --ssl-cert-file ~/server1.crt

