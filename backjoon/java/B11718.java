import java.util.Scanner;

class B11718 {
    private static void printStr(String str) {
        System.out.println(str);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s;
        int i = 0;
        while (i < 100 && scanner.hasNextLine()) {
            s = scanner.nextLine();
            printStr(s);
            i++;
        }
    }
}
