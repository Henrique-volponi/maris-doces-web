import React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Text } from '../../../../ui/components/Text'
import * as styles from './styles'

type IconProps = React.SVGProps<SVGSVGElement>

type ContactInfo = {
  title: string
  text: string
  Icon: React.FC<IconProps>
}

const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden {...props}>
    <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1Z" />
  </svg>
)

const EmailIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden {...props}>
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V6H4Zm16 12V9.25l-7.38 4.61a1 1 0 0 1-1.04 0L4 9.25V18h16Z" />
  </svg>
)

const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 12 9.5Zm5.75-3.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 5.75Z" />
  </svg>
)

const LocationIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden {...props}>
    <path d="M12 2a7 7 0 0 1 7 7c0 4.63-4.87 10.16-6.54 12a.6.6 0 0 1-.92 0C9.87 19.16 5 13.63 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 3.27 3.22 7.6 5 9.68 1.78-2.08 5-6.41 5-9.68a5 5 0 0 0-5-5Zm0 2.5A2.5 2.5 0 1 1 9.5 9 2.5 2.5 0 0 1 12 6.5Z" />
  </svg>
)

const ScheduleIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="#c0631d" aria-hidden {...props}>
    <path d="M7 2h2v2h6V2h2v2h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V2Zm12 6H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Zm-7 3h2v2h-2v-2Z" />
  </svg>
)

const contacts: ContactInfo[] = [
  { title: 'Telefone', text: '(11) 98765-4321', Icon: PhoneIcon },
  { title: 'Email', text: 'contato@marisdoces.com.br', Icon: EmailIcon },
  { title: 'Instagram', text: '@marisdoces', Icon: InstagramIcon },
  { title: 'Localização', text: 'São Paulo, SP', Icon: LocationIcon },
]

const schedule = {
  title: 'Horário de Atendimento',
  Icon: ScheduleIcon,
  hours: ['Segunda a Sexta: 9h às 18h', 'Sábado: 9h às 13h', 'Domingo: Fechado'],
  noteLabel: 'Encomendas:',
  noteText:
    'Faça seu pedido com antecedência mínima de 48 horas. Para ovos de Páscoa e bolos personalizados, recomendamos encomendar com pelo menos 1 semana de antecedência.',
}

export const Contact: React.FC = () => {
  return (
    <Stack sx={styles.section} id="contact">
      <Text sx={styles.heading} variant="h2">
        Entre em Contato
      </Text>
      <Text sx={styles.subheading} variant="body1">
        Estamos prontos para atender você e tornar seu momento especial ainda mais doce!
      </Text>

      <Box sx={styles.cards}>
        {contacts.map(({ title, text, Icon }) => (
          <Stack key={title} sx={styles.card}>
            <Box sx={styles.iconBadge}>
              <Icon />
            </Box>
            <Text sx={styles.cardTitle} variant="h3">
              {title}
            </Text>
            <Text sx={styles.cardText} variant="body1">
              {text}
            </Text>
          </Stack>
        ))}
      </Box>

      <Stack sx={styles.scheduleCard}>
        <Box sx={styles.scheduleHeader}>
          <schedule.Icon />
          <span>{schedule.title}</span>
        </Box>

        <Stack sx={styles.scheduleList}>
          {schedule.hours.map((hour) => (
            <Text key={hour} sx={styles.scheduleText}>
              {hour}
            </Text>
          ))}
        </Stack>

        <Box sx={styles.scheduleDivider}>
          <Text sx={styles.note}>{schedule.noteLabel}</Text>
          <Text sx={styles.noteText}>{schedule.noteText}</Text>
        </Box>
      </Stack>
    </Stack>
  )
}
