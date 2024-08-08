import java.util.Scanner;

public class B9086 {
    private static void print(char s) {
        System.out.print(s);
    }

    private static void printStartAndEndInString(String s) {
        int len = s.length();
        print(s.charAt(0));
        print(s.charAt(len - 1));
        print('\n');
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int i = sc.nextInt();
        sc.nextLine();
        for (int n = 0; n < i; n++) {
            String s;
            String ret;
            s = sc.nextLine();
            printStartAndEndInString(s);
        }
    }
}
