object Hamming {
  def compute(strandA: String, strandB: String) = {
    val min = Math.min(strandA.length, strandB.length)
    var distance = 0
    for(i <- 0 to min - 1) {
      val charA = strandA.charAt(i)
      val charB = strandB.charAt(i)
      if(charA != charB) {
        distance += 1
      }
    }
    distance
  }
}
