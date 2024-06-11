import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from '@/types/ApiResponse';
import { log } from "console";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    console.log("Verification Code: ", verifyCode),

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Feedback Hub | Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}




// export async function sendVerificationEmail(
//     email: string,
//     username: string,
//     verifyCode: string
//   ): Promise<ApiResponse> {
//     try {
//       await resend.emails.send({
//         from: 'sameershrikhande5@gmail.com',
//         to: email,
//         subject: 'Mystery Message Verification Code',
//         react: VerificationEmail({ username, otp: verifyCode }),
//       });
//       return { success: true, message: 'Verification email sent successfully.' };
//     } catch (emailError) {
//       console.error('Error sending verification email:', emailError);
//       return { success: false, message: 'Failed to send verification email.' };
//     }
//   }