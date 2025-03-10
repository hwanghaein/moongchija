import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { PaymentsDetailRepository } from "@/domain/repositories/PaymentsDetailRepository";
import { PaymentsDetail } from "@/domain/entities/PaymentsDetail";

export class SbPaymentsDetailRepository implements PaymentsDetailRepository {
  private async getClient(): Promise<SupabaseClient> {
    return await createClient();
  }

  async create(paymentsId: number, amount: number, descript: string): Promise<void> {
    const supabase = await this.getClient();
    const { error } = await supabase
      .from("payments_detail")
      .insert([{ payments_id: paymentsId, amount, descript }]);

    if (error) {
      throw new Error(`정산 세부 내역 생성 실패: ${error.message}`);
    }
  }

  async findByPaymentsId(paymentsId: number): Promise<PaymentsDetail[]> {
    const supabase = await this.getClient();
    const { data, error } = await supabase
      .from("payments_detail")
      .select("*")
      .eq("payments_id", paymentsId);

    if (error) {
      console.log("정산 세부 내역 조회 실패:", error.message);
      return [];
    }

    return data || [];
  }

}
