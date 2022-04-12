export default function (req, res) {

  let nodemailer = require('nodemailer')

  if (req.body.mail || req.body.web) {
    return;
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "planerent.de",
    auth: {
      user: '',
      pass: '',
    },
    secure: true,
  });

  const mailData = {
    from: '',
    to: '',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
            <p>Email von: ${req.body.email}</p>
            <p>Name: ${req.body.name}</p>
            <p>Telefonnummer von: ${req.body.telefonnummer}</p>
            <p>Anliegen: ${req.body.lizenz}</p>
            <p>Nachricht: ${req.body.message}</p>
            <p>gesendet von Kontaktformular</p>
`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  })

  res.send('success')
}