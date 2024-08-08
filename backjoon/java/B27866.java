import java.util.Scanner;

class Main {
	private static void printStr(char str) {
		System.out.println(str);
	}

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String s = scanner.nextLine();
		int i = scanner.nextInt();

		printStr(s.charAt((i - 1)));
	}
}