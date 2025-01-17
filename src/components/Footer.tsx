const currentYear = new Date().getFullYear()

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {currentYear} Your Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer
