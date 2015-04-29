/**
 * Compute the hamming distance of two DNA strands
 */
object Hamming {
  def compute(strandA: String, strandB: String) = {
    val minStrandLength = Math.min(strandA.length, strandB.length)
    0.to(minStrandLength - 1).count(i => strandA.charAt(i) != strandB.charAt(i))
  }
}
