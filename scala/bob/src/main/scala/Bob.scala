class Bob {
  def hey(message: String): String = message match {
    case Shouting() => "Whoa, chill out!"
    case Silence() => "Fine. Be that way!"
    case Question() => "Sure."
    case _ => "Whatever."
  }

  case object Silence {
    def unapply(message: String) = message.trim.isEmpty
  }

  case object Question {
    def unapply(message: String) = message.last == '?'
  }

  case object Shouting {
    def unapply(message: String) = message.exists(_.isUpper) && !message.exists(_.isLower)
  }

}
